import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signupUser, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {},
  });
  return { signupUser, isLoading };
}
