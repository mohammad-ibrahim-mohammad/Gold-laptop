import { URL } from "../helpers/constants";

export async function getReviews(id) {
  try {
    const res = await fetch(`${URL}/products/${id}/reviews`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error("");

    const { data } = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error(err.message);
  }
}
