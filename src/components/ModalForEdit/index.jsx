import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const ModalForEdit = ({ data, action, getData }) => {
  const [open, setOpen] = useState(false);

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

  const handleOpenCloseModal = () => setOpen(!open);

  const handleSubmit = async () => {
    setIsLoading(true);

    await action(values, data._id);

    await getData();

    setIsLoading(false);

    handleOpenCloseModal();
  };

  return (
    <>
      <Button
        onClick={handleOpenCloseModal}
        variant="contained"
        color="primary"
      >
        Editar
      </Button>
      <Dialog open={open} onClose={handleOpenCloseModal}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4>Actualizar Producto</h4>
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
                Actualizar
              </LoadingButton>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenCloseModal}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalForEdit;
