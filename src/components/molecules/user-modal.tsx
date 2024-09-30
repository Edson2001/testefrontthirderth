import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {UserForm} from "./user-form"

export default function UserModal({ handleClose, open, loading, isEdit }: { open: boolean, handleClose: () => void, loading: boolean,  isEdit: boolean }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                   Informações
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       <UserForm 
                            isEdit={isEdit}
                            loading={loading}
                       />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancelar
                    </Button>
                   {/*  <Button disabled={loading} onClick={handleOk}>Continuar</Button> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
