'use client'
import {TableUser} from "../mocules/tble-user"

export default function User() {
  return (
    <>
      <TableUser 
        fullRows={[]}
        loading={false}
        onDelete={()=> console.log("")}
        onEdit={()=> console.log("")}
      />
    </>
  )
}