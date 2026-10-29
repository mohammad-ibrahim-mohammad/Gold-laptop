import Categories from "@/features/Categories/Categories";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

function AppNav() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex px-4">
        {/* Departments Dropdown */}
        <div className="bg-primary flex w-64 cursor-pointer items-center justify-between gap-4 px-6 py-3 font-semibold text-white">
          <div className="flex items-center gap-2">
            <FaBars size={16} />
            <span>تصفح الأقسام</span>
          </div>
          <FiChevronDown size={12} />
        </div>

        <Categories />
      </div>
    </nav>
  );
}

export default AppNav;
