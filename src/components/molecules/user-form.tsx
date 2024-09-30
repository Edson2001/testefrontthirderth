'use client';

import * as React from 'react';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid2';
import { Controller, useForm } from 'react-hook-form';

export function UserForm({ isEdit, loading }: { isEdit: boolean, loading: boolean }): React.JSX.Element {

    console.log(isEdit)
    const form = useForm({})

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Grid spacing={2} columns={1}>
                <Grid md={6} xs={12} marginBottom={2}>
                    <FormControl fullWidth required>
                        <InputLabel>Nome</InputLabel>
                        <Controller
                            name={'name'}
                            control={form.control}
                            render={({ field: { onChange, value } }) => (
                                <OutlinedInput
                                    value={value}
                                    onChange={onChange}
                                    label="Nome"
                                />
                            )}
                        />
                    </FormControl>
                </Grid>
                <Grid md={6} xs={12} marginBottom={3}>
                    <FormControl fullWidth required>
                        <InputLabel>Email</InputLabel>
                        <Controller
                            name={'email'}
                            control={form.control}
                            render={({ field: { onChange, value } }) => (
                                <OutlinedInput
                                    value={value}

                                    onChange={onChange}
                                    label="Email"
                                />
                            )}
                        />
                    </FormControl>
                </Grid>

                <Grid md={6} xs={12}  >
                    <Button
                        fullWidth
                        onClick={handleOk}
                        variant="contained"
                        disabled={loading}
                    >Salvar dados</Button>
                </Grid>
            </Grid>

        </form>
    );
}
