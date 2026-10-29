import { useState } from "react";
import { useParams } from "react-router-dom";
import ResetPasswordForm from "../ui/ResetPasswordForm";

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:2000/api/v1/users/resetPassword/${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
            passwordConfirm,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
