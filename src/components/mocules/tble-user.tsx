'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Button } from '@mui/material';
interface CustomersTableProps {
    loading: boolean
    onDelete: (item: any /* iTeacher */)=> void,
    onEdit: (item: any)=> void,
    fullRows: any[]
}

export function TeacherUser({
    fullRows,
    onDelete,
    onEdit,
    loading
}: CustomersTableProps): React.JSX.Element {
    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Fornecedor',
                size: 150,
            },
            {
                accessorKey: 'typeTeacher',
                header: 'Tipo',
                size: 150,
            },
            {
                accessorKey: 'identification',
                header: 'Documento',
                size: 150,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 150,
            },
            {
                accessorKey: 'typeIdentification',
                header: 'Tipo de identificação',
                size: 150,
            },
            {
                accessorKey: 'phone1',
                header: 'Telefone',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Endereço',
                size: 150,
            },
            {
                accessorKey: 'description',
                header: 'Operações',
                Cell: ({ row }) => {
                    return (
                        <>
                            <Button onClick={()=> onDelete(row.original)}>
                               {/*  <Trash /> */}
                            </Button>
                            <Button onClick={()=> onEdit(row.original)}>
                               {/*  <Pencil /> */}
                            </Button>
                        </>
                    )

                }
            }
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: fullRows ?? [],
        state: {
            isLoading: loading
        },
        localization: {
            changeFilterMode: 'Alterar o modo de filtro',
        }
    });

    return (
        <Card>
            <Box sx={{ overflowX: 'auto' }}>
                <MaterialReactTable
                    table={table}  
                />
            </Box>
            <Divider />
        </Card>
    );
}