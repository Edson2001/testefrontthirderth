import {useState} from "react"
import {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} from "@/src/services/user.service"

export const useUser = () => {

    const { data, isLoading } = useGetUsersQuery()


    const [createUser, { isLoading: isCreatingUser, error: createUserError }] = useCreateUserMutation();

    const [updateUser, { isLoading: isUpdatingUser, error: updateUserError }] = useUpdateUserMutation();
    const [deleteUser, { isLoading: isDeletingUser, error: deleteUserError }] = useDeleteUserMutation();

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleDelete = (userId: string) => {
        setSelectedUserId(userId);
        setIsConfirmationOpen(true);
    };

    const confirmDelete = async () => {
        if (selectedUserId) {
            try {
                await deleteUser(selectedUserId).unwrap();
                console.log("Usuário deletado com sucesso");
            } catch (error) {
                console.error("Erro ao deletar o usuário:", error);
            } finally {
                setIsConfirmationOpen(false);
            }
        }
    };

    const handleClose = () => {
        setIsConfirmationOpen(false);
        setSelectedUserId(null);
    };

    return {
        data,
        isLoading,
        createUser,
        updateUser,
        deleteUser,
        isCreatingUser,
        isUpdatingUser,
        isDeletingUser,
        handleDelete,
        confirmDelete,
        handleClose,
        createUserError,
        updateUserError,
        deleteUserError,
        isConfirmationOpen
    }
}