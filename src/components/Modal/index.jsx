import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const Modal = ({ txtButton, content, open, handleOpenCloseModal }) => {
  return (
    <div>
      <Button onClick={handleOpenCloseModal} variant="contained">
        {txtButton}
      </Button>

      <Dialog open={open} onClose={handleOpenCloseModal}>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleOpenCloseModal}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
