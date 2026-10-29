import { URL } from "@/helpers/constants";

export const getCategories = async () => {
  try {
    const res = await fetch(`${URL}/categories`);

    if (!res.ok) throw new Error("Failed to get categories!.");

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
