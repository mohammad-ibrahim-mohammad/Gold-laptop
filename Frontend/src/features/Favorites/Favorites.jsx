import Products from "../Products/Products";
import useFavorites from "./useFavorites";

function Favorites() {
  const { data, isLoading } = useFavorites();
  return <p>products page</p>;
}

export default Favorites;
