import { FiSearch } from "react-icons/fi";
function SearchBar() {
  return (
    <div className="relative mx-8 max-w-2xl flex-1">
      <form className="flex overflow-hidden rounded-full border border-gray-300 bg-gray-50">
        <input
          type="text"
          placeholder="البحث عن المنتجات..."
          className="w-full border-none bg-transparent px-4 py-2 text-sm focus:ring-0"
        />
        <div className="flex items-center border-r border-gray-300 bg-white px-4 py-2">
          <select className="border-none bg-transparent pr-8 text-sm text-gray-600 focus:ring-0">
            <option>جميع الفئات</option>
          </select>
        </div>
        <button type="submit" className="hover:text-primary px-4 text-gray-500">
          <FiSearch size={16} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
