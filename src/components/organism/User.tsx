'use client'
import { TableUser } from "../molecules/tble-user"
import { useUser } from "@/src/hooks/user.hook"
import Confirmation from "../molecules/Confirmation"
import UserModal from "../molecules/user-modal"

export default function User() {

  const { data, isLoading, isConfirmationOpen, isDeletingUser, handleClose, confirmDelete, handleDelete } = useUser()

  return (
    <main className="flex flex-col justify-center items-center w-full px-1 ">
      <div>
        <h1 className="text-white tx-xl mb-5 mt-4 font-bold">Tabele de controle de usuários</h1>

      </div>

      <TableUser
        fullRows={data ?? []}
        loading={isLoading}
        onDelete={(user) => handleDelete(user?.id)}
        onEdit={() => console.log("")}
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
        handleClose={()=> console.log("")}
        isEdit={false}
        loading={false}
        open={true}
      />

    </main>
  )
}