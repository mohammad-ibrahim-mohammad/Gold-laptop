import { useState } from "react";
import { FaThLarge, FaThList, FaListUl } from "react-icons/fa";

function ProductsView() {
  const [view, setView] = useState("grid");
  return (
    <div className="ml-4 flex gap-2 border-r pr-4 text-gray-400">
      <FaThLarge
        onClick={() => setView("grid")}
        className={`cursor-pointer ${view === "grid" ? "text-black" : "hover:text-black"}`}
      />
      <FaThList
        onClick={() => setView("thlist")}
        className={`cursor-pointer ${view === "thlist" ? "text-black" : "hover:text-black"}`}
      />
      <FaListUl
        onClick={() => setView("list")}
        className={`cursor-pointer ${view === "list" ? "text-black" : "hover:text-black"}`}
      />
    </div>
  );
}

export default ProductsView;
