import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { storeProduct } from "../../services/products";

const CreateProduct = ({ fetchProducts }) => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await storeProduct(values);

    await fetchProducts();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h4>Crear Producto</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Precio $"
          variant="outlined"
          fullWidth
          name="price"
          value={values.price}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Categoría"
          variant="outlined"
          fullWidth
          name="category"
          value={values.category}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Crear
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
