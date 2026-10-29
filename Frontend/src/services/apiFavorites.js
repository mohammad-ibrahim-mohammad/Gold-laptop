import { URL } from "@/helpers/constants";

export const createFavoriteApi = async (newFavorite) => {
  try {
    const res = await fetch(`${URL}/favorites`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFavorite),
    });
    if (!res.ok) throw new Error("Failed to craete your favorite");

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getFavoritesApi = async () => {
  try {
    const res = await fetch(`${URL}/favorites`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to get your favorites");

    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
