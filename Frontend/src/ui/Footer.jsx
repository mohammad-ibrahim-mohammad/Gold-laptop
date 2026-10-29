import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 justify-items-center gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="mb-5 flex items-center gap-2 text-2xl font-bold text-gray-800"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-white">
                GL
              </span>
              <span>GoldLaptop</span>
            </a>

            <p className="mb-6 max-w-sm text-sm leading-7 text-gray-600">
              الوجهة الأمثل لأحدث الأجهزة والتقنيات. نقدم لكم حلولًا متكاملة
              لمحترفي اليوم وعشاق التكنولوجيا.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:border-primary hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:border-primary hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:text-white"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-800">
              روابط سريعة
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition">
                  تسوق الكل
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  أجهزة مجددة
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  برنامج الاستبدال
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  بطاقات الهدايا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-800">الدعم</h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition">
                  معلومات الشحن
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  تتبع الطلبات
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  سياسة الإرجاع
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  الضمان
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-800">الشركة</h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition">
                  تواصل معنا
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  سياسة الخصوصية
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  شروط الاستخدام
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  عن الشركة
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 border-t pt-7 text-center text-xs text-gray-500">
          <p>© 2026 GoldLaptop. All rights reserved. Built for creators.</p>

          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-gray-800"
            >
              <FaGlobe size={13} />
              English (US)
            </button>

            <a href="#" className="transition hover:text-gray-800">
              Sitemap
            </a>

            <a href="#" className="transition hover:text-gray-800">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
