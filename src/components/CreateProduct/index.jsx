import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { storeProduct } from "../../services/products";

const CreateProduct = ({
  fetchProducts,
  handleOpenCloseModal,
  isUpdate = false,
  data,
  id,
  updateProduct,
}) => {
  console.log("id", id);

  const [values, setValues] = useState({
    name: data?.name || "",
    price: data?.price || "",
    description: data?.description || "",
    category: data?.category || "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    isUpdate
      ? await updateProduct(values, data._id)
      : await storeProduct(values);

    await fetchProducts();

    setIsLoading(false);

    handleOpenCloseModal();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h4>{isUpdate ? "Actualizar Producto" : "Crear Producto"}</h4>
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
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          size="large"
          style={{ width: 200 }}
        >
          {isUpdate ? "Actualizar" : "Crear"}
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
