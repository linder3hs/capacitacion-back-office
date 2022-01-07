import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import {
  Table,
  Modal,
  CreateProduct,
  ModalForEdit,
  ModalForDelete,
} from "../../components";
import {
  getProducts,
  updateProduct,
  deleteProduct,
} from "../../services/products";

const Home = () => {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpenCloseModal = () => setOpen(!open);

  const fetchProducts = async () => {
    const products = await getProducts();

    if (!products.ok) {
      alert("Hubo un error");
      return;
    }

    setData(products.body);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Precio",
    },
    {
      field: "description",
      headerName: "Descripción",
      width: 150,
    },
    {
      field: "category",
      headerName: "Categoría",
      width: 150,
    },
    {
      field: "action",
      headerName: "Acciones",
      sortable: false,
      width: 300,
      renderCell: (row) => {
        console.log(row);

        return (
          <>
            <ModalForEdit
              data={row.row}
              action={updateProduct}
              getData={fetchProducts}
            />
            &nbsp;&nbsp;&nbsp;
            <ModalForDelete
              action={deleteProduct}
              id={row.id}
              getData={fetchProducts}
            />
          </>
        );
      },
    },
  ];

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
          <Box display="flex" justifyContent="flex-end">
            <Modal
              txtButton="Crear Producto"
              open={open}
              handleOpenCloseModal={handleOpenCloseModal}
              content={
                <CreateProduct
                  fetchProducts={fetchProducts}
                  handleOpenCloseModal={handleOpenCloseModal}
                />
              }
            />
          </Box>
        </Grid>
      </Grid>
      {data && (
        <Table title="Lista de productos" columns={columns} data={data} />
      )}
    </Container>
  );
};

export default Home;
