import { Link } from "react-router-dom";
import useCategories from "./useCategories";

function Categories() {
  const { categories = [], isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="flex items-center gap-8 px-8 font-semibold text-gray-700">
      {categories.map((category) => (
        <li key={category.id} className="group relative cursor-pointer">
          <Link
            to={`/categories/${category.id}`}
            className="hover:text-primary flex items-center gap-1 py-3"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
