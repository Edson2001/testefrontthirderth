'use client'
import { TableUser } from "../mocules/tble-user"
import { useUser } from "@/src/hooks/user.hook"

export default function User() {

  const { data, isLoading } = useUser()
  console.log(data, 'data', isLoading)

  return (
    <main className="flex flex-col justify-center items-center w-full px-4">
      <h1 className="text-white tx-xl mb-5 mt-4 font-bold">Tabele de controle de usuários</h1>
      <TableUser
        fullRows={data ?? []}
        loading={isLoading}
        onDelete={() => console.log("")}
        onEdit={() => console.log("")}
      />
    </main>
  )
}