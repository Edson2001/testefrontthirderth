'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import {iUser} from "@/src/app/@types/User.type"
import {Trash} from "lucide-react"
import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Button } from '@mui/material';
interface CustomersTableProps {
    loading: boolean
    onDelete: (item: iUser)=> void,
    onEdit: (item: iUser)=> void,
    fullRows: iUser[]
}

export function TableUser({
    fullRows,
    onDelete,
    onEdit,
    loading
}: CustomersTableProps): React.JSX.Element {
    const columns = useMemo<MRT_ColumnDef<iUser>[]>(
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
                accessorKey: 'description',
                header: 'Operações',
                Cell: ({ row }) => {
                    return (
                        <>
                            <Button onClick={()=> onDelete(row.original)}>
                                <Trash />
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