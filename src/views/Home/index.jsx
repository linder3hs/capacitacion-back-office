import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { Table, Modal, CreateProduct } from "../../components";
import { columns } from "./columns";
import { getProducts } from "../../services/products";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const products = await getProducts();

    if (!products.ok) {
      alert("Hubo un error");
      return;
    }

    setData(products.body);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} alignItems="center">
        <Grid item sm={6} xs={12}>
          <h1>Productos</h1>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Modal
            txtButton="Crear Producto"
            content={<CreateProduct fetchProducts={fetchProducts} />}
          />
        </Grid>
      </Grid>
      {data && (
        <Table title="Lista de productos" columns={columns} data={data} />
      )}
    </Container>
  );
};

export default Home;
