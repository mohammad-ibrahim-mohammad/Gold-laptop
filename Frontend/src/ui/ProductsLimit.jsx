import { useSearchParams } from "react-router-dom";

function ProductsLimit({ limitPageOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit")) || 9;


  function handleAddLimit(value) {
    searchParams.set("limit", value);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="text-gray-500">عرض:</span>
      <div className="flex gap-2 font-semibold">
        {limitPageOptions.map((n) => (
          <span
            key={n}
            onClick={() => handleAddLimit(n)}
            className={`cursor-pointer ${
              limit === n
                ? "border-b border-black text-black"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductsLimit;
