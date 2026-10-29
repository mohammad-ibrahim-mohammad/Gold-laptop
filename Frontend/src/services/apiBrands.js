import { URL } from "@/helpers/constants";

export const getBrands = async () => {
  try {
    const res = await fetch(`${URL}/brands`);

    if (!res.ok) throw new Error("faild to fetch brands!.");

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
