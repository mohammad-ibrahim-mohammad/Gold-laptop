import { URL } from "../helpers/constants";

export async function getProducts({
  limit,
  sort,
  categoriesFilter,
  brandsFilter,
}) {
  const params = new URLSearchParams({ limit });

  if (sort !== null) params.append("sort", sort);

  categoriesFilter.forEach((category) => {
    params.append("category", category);
  });
  brandsFilter.forEach((brand) => {
    params.append("brand", brand);
  });

  try {
    const res = await fetch(`${URL}/products?${params.toString()}`);
    if (!res.ok) throw new Error("");

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
  }
}
export async function getProductDetails({ id }) {
  try {
    const res = await fetch(`${URL}/products/${id}`);
    if (!res.ok) throw new Error("");

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
