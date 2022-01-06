import { DataGrid } from "@mui/x-data-grid";

const Table = ({ title, columns, data }) => {
  return (
    <div>
      <h5>{title}</h5>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          rowPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  );
};

export default Table;
