'use client'
import { TableUser } from "../molecules/tble-user"
import { useUser } from "@/src/hooks/user.hook"
import Confirmation from "../molecules/Confirmation"

export default function User() {

  const { data, isLoading, isConfirmationOpen,  isDeletingUser} = useUser()

  return (
    <main className="flex flex-col justify-center items-center w-full px-4">
      <h1 className="text-white tx-xl mb-5 mt-4 font-bold">Tabele de controle de usuários</h1>

      <TableUser
        fullRows={data ?? []}
        loading={isLoading}
        onDelete={() => console.log("")}
        onEdit={() => console.log("")}
      />

      <Confirmation 
        handleClose={()=> console.log("")}
        handleOk={()=> console.log("")}
        headerInformation="Deletar"
        information="Deseja deletar este usuário?"
        loading={isDeletingUser}
        open={isConfirmationOpen}
      />
    </main>
  )
}