import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { iUser } from "@/src/app/@types/User.type"
import { UserForm } from "./user-form"
import { UserFormFields } from '@/src/hooks/useForm'; 

export default function UserModal({ handleClose, handleSave, open, loading, isEdit, defaultValues }:
    { open: boolean, handleClose: () => void, handleSave: (data: UserFormFields) => void, loading: boolean, isEdit: boolean, defaultValues: iUser }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {isEdit ? "Editar Usuário" : "Criar Usuário"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <UserForm
                            isEdit={isEdit}
                            loading={loading}
                            onSubmit={handleSave}  
                            defaultValues={defaultValues}
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
