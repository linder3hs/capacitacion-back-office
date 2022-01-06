import { Button } from "@mui/material";

export const columns = [
  {
    field: "_id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
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
      return (
        <>
          <Button variant="contained" onClick={() => console.log("row", row)}>
            Editar
          </Button>
          <Button color="secondary">Eliminar</Button>
        </>
      );
    },
  },
];
