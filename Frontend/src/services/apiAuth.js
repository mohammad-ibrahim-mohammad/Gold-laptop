import { URL } from "../helpers/constants";

export const login = async ({ email, password }) => {
  try {
    const res = await fetch(`${URL}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("");
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err.message || "error");
  }
};
export const signup = async ({ name, email, password, passwordConfirm }) => {
  try {
    const res = await fetch(`${URL}/users/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, passwordConfirm }),
    });
    if (!res.ok) throw new Error("");
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err.message || "error");
  }
};
