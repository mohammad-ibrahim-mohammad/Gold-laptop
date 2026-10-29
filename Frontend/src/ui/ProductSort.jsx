import { useSearchParams } from "react-router-dom";

function ProductSort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "";

  function handleSort(value) {
    searchParams.set("sort", value);

    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <select
        value={sort}
        onChange={(e) => handleSort(e.target.value)}
        className="rounded border bg-gray-50 px-4 py-2 focus:ring-0"
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            Sort by {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductSort;
