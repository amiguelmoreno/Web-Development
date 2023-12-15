import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin sucessfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => {
      toast.success("New cabin sucessfully created");
    },
  });

  return { isEditing, editCabin };
}
