import { createFavoriteApi } from "@/services/apiFavorites";
import { useMutation } from "@tanstack/react-query";

function useCreateFavorite() {
  const { mutate: createFavorite, isPending: isCreatingFavorite } = useMutation(
    {
      mutationFn: (newFavorite) => createFavoriteApi(newFavorite),
    },
  );
  return { createFavorite, isCreatingFavorite };
}

export default useCreateFavorite;
