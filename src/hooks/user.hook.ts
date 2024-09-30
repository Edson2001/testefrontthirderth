import { useState } from "react"
import {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} from "@/src/services/user.service"
import toast from 'react-hot-toast';
import {iUser} from "@/src/app/@types/User.type"

export const useUser = () => {

    const { data, isLoading } = useGetUsersQuery()

    const [isEdit, setIsEdit] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [createUser, { isLoading: isCreatingUser, error: createUserError }] = useCreateUserMutation();

    const [updateUser, { isLoading: isUpdatingUser, error: updateUserError }] = useUpdateUserMutation();
    const [deleteUser, { isLoading: isDeletingUser, error: deleteUserError }] = useDeleteUserMutation();

    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleDelete = (userId: number) => {
        setSelectedUserId(userId);
        setIsConfirmationOpen(true);
    };

    const handleOpenModal = (user: iUser | null = null) => {
        setSelectedUser(user);
        setIsEdit(!!user);
        setModalOpen(true);
    };

    const handleSave = async (data) => {
        try {
            if (isEdit && selectedUser) {
                await updateUser({ ...selectedUser, ...data }).unwrap();
                toast("Usuário atualizado com sucesso");
            } else {
                await createUser(data).unwrap();
                toast("Usuário criado com sucesso");
            }
            setModalOpen(false);
        } catch (error) {
            toast.error("Erro ao salvar o usuário");
            console.error(error);
        }
    };

    const confirmDelete = async () => {
        if (selectedUserId) {
            try {
                await deleteUser(selectedUserId).unwrap();
                toast('Usuário deletado com sucesso')
            } catch (error: unknown) {
                console.log(error)
                toast.error('Erro ao deletar o usuário:')
            } finally {
                setIsConfirmationOpen(false);
            }
        }
    };

    const handleClose = () => {
        setIsConfirmationOpen(false);
        setSelectedUserId(null);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedUser(null);
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
        isConfirmationOpen,
        isEdit,
        modalOpen,
        selectedUser,
        handleOpenModal,
        handleSave,
        handleModalClose,
    }
}