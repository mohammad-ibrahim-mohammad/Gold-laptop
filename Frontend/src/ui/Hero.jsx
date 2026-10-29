const categories = [
  { name: "كمبيوتر مكتبي", count: "5 Products", active: false },
  { name: "كمبيوتر محمول", count: "15 Products", active: true },
  { name: "SMARTWATCH", count: "0 Products", active: false },
  { name: "DELL", count: "1 Product", active: false },
  { name: "ACER", count: "0 Products", active: false },
];

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative bg-cover bg-center py-24 text-center text-white"
      style={{
        backgroundImage: "url('../public/laptop.jpg')",
        backgroundPosition: "center 20%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-800/70" />

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="mb-12 text-5xl font-bold">Goldlaptop</h1>

        <div className="mt-8 flex justify-center gap-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`cursor-pointer text-center transition ${
                cat.active
                  ? "border-primary border-b-2 pb-2"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <h3
                className={`mb-1 text-xl font-bold ${
                  cat.active ? "text-primary" : ""
                }`}
              >
                {cat.name}
              </h3>
              <p className="text-sm">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
