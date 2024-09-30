import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Confirmation({handleClose, open, handleOk, information, headerInformation, loading}: {open: boolean, handleClose: ()=> void, handleOk: ()=> void, information: string, headerInformation: string, loading: boolean}) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {headerInformation}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           {information}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button disabled={loading} onClick={handleOk}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
