import { useState } from "react";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";

/**
 *
 * @param {string} txtButton
 * @param {function} action
 * @param {string} id
 * @param {function} getData
 *
 */
const ModalForDelete = ({ txtButton = "Eliminar", action, id, getData }) => {
  console.log("delete id", id);

  const [open, setOpen] = useState(false);

  const handleOpenCloseModal = () => setOpen(!open);

  const fetchAction = async () => {
    const deleteElement = await action(id);

    if (!deleteElement.ok) {
      alert(deleteElement.body);
      return;
    }

    await getData();

    handleOpenCloseModal();
  };

  return (
    <>
      <Button
        color="secondary"
        variant="outlined"
        onClick={handleOpenCloseModal}
      >
        {txtButton}
      </Button>
      <Dialog open={open} onClose={handleOpenCloseModal}>
        <DialogContent>
          <h4>Esta seguro de eliminar este producto?</h4>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={fetchAction}>
            Si, lo estoy
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={handleOpenCloseModal}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalForDelete;
