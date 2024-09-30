import { useForm as useReactHookForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const userFormSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Deve ser um email válido"),
});

export type UserFormFields = z.infer<typeof userFormSchema>;

export const useUserForm = (defaultValues?: Partial<UserFormFields> | null) => {

  const form = useReactHookForm<UserFormFields>({
    resolver: zodResolver(userFormSchema),
    defaultValues: defaultValues || { name: "", email: "" },
  });


  const handleSubmit = (onSubmit: (data: UserFormFields) => void) => {
    console.log("submit")
    return form.handleSubmit(onSubmit);
  };

  return {
    ...form,
    handleSubmit,
  };
};
