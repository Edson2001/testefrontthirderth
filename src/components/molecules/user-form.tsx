'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid2';
import { Controller } from 'react-hook-form';
import { useUserForm } from "@/src/hooks/useForm"
import { UserFormFields } from '@/src/hooks/useForm';

export function UserForm({ isEdit, loading, onSubmit, defaultValues }:
    { isEdit: boolean, loading: boolean, onSubmit: (data: UserFormFields) => void, defaultValues?: UserFormFields }): React.JSX.Element {

    const { control, handleSubmit, formState: { errors } } = useUserForm(defaultValues);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid spacing={2} columns={1}>
                <Grid md={6} xs={12} marginBottom={2}>
                    <FormControl fullWidth required>
                        <InputLabel>Nome</InputLabel>
                        <Controller
                            name={'name'}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <OutlinedInput
                                    value={value}
                                    onChange={onChange}
                                    label="Nome"
                                />
                            )}
                        />
                        {errors?.name ? <FormHelperText>{errors?.name?.message}</FormHelperText> : null}
                    </FormControl>
                </Grid>
                <Grid md={6} xs={12} marginBottom={3}>
                    <FormControl fullWidth required>
                        <InputLabel>Email</InputLabel>
                        <Controller
                            name={'email'}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <OutlinedInput
                                    value={value}
                                    onChange={onChange}
                                    label="Email"
                                />
                            )}
                        />
                        {errors?.email ? <FormHelperText>{errors?.email?.message}</FormHelperText> : null}
                    </FormControl>
                </Grid>

                <Grid md={6} xs={12}  >
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={loading}
                    >{isEdit ? "Atualizar Dados" : "Salvar Dados"}</Button>
                </Grid>
            </Grid>

        </form>
    );
}
