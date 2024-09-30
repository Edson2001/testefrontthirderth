'use client'
import { TableUser } from "../molecules/table-user"
import { useUser } from "@/src/hooks/user.hook"
import Confirmation from "../molecules/Confirmation"
import UserModal from "../molecules/user-modal"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function User() {

  const {
    userList,
    isLoading,
    isConfirmationOpen,
    isDeletingUser,
    handleClose,
    confirmDelete,
    handleDelete,
    handleOpenModal,
    modalOpen,
    isEdit,
    handleSave,
    handleModalClose,
    selectedUser
  } = useUser()

  return (
    <Stack spacing={3} sx={{ mx: { xs: 2, sm: 3, md: 5, lg: 10 } }}>
      <div className="flex justify-between  flex-wrap items-center w-full">
        <h1 className="text-white tx-xl mb-5 mt-4 font-bold">Tabele de controle de usuários</h1>
        <Button onClick={()=>handleOpenModal(null)}   variant="contained" >Criar usuário</Button>
      </div>

      <TableUser
        fullRows={userList ?? []}
        loading={isLoading}
        onDelete={(user) => handleDelete(user?.id ?? null)}
        onEdit={(user) => handleOpenModal(user)}
      />

      <Confirmation
        handleClose={handleClose}
        handleOk={confirmDelete}
        headerInformation="Deletar"
        information="Deseja deletar este usuário?"
        loading={isDeletingUser}
        open={isConfirmationOpen}
      />

      <UserModal
        handleClose={handleModalClose}
        open={modalOpen}
        loading={isLoading}
        isEdit={isEdit}
        handleSave={handleSave}
        defaultValues={selectedUser}
      />

    </Stack>
  )
}