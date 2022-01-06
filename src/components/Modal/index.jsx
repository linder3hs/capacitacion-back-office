import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const Modal = ({ txtButton, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpenCloseModal = () => setOpen(!open);

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
