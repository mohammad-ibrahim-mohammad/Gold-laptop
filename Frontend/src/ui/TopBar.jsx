import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-gray-800 py-2 text-sm text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span>
            احصل على الكفالة الذهبية عند شرائك أي جهاز من شركة New Laptop
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={14} />
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-gray-300">
              من نحن
            </a>
            <a href="#" className="hover:text-gray-300">
              أسئلة متكررة
            </a>
            <a href="#" className="hover:text-gray-300">
              اتصل بنا
            </a>
            <a href="#" className="border-r border-gray-600 pr-4 font-bold">
              English
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
