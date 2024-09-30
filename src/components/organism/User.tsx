'use client'
import { TableUser } from "../molecules/tble-user"
import { useUser } from "@/src/hooks/user.hook"
import Confirmation from "../molecules/Confirmation"
import UserModal from "../molecules/user-modal"
import Button from '@mui/material/Button';

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
    <main className="flex flex-col justify-center items-center w-full px-1 ">
      <div className="flex justify-between items-center">
        <h1 className="text-white tx-xl mb-5 mt-4 font-bold">Tabele de controle de usuários</h1>
        <Button onClick={()=>handleOpenModal(null)} fullWidth variant="contained" >Criar usuário</Button>
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

    </main>
  )
}