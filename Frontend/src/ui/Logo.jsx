import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-2xl font-bold text-gray-800"
    >
      <span>GoldLaptop</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm text-white">
        GL
      </span>
    </Link>
  );
}

export default Logo;
