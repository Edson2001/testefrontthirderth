import { useGetUsersQuery } from "@/src/services/user.service"

export const useUser = () => {

    const { data, isLoading } = useGetUsersQuery()

    return {
        data,
        isLoading
    }
}