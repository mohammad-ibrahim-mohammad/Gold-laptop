import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brands = [
  { name: "ASUS", logo: "/images/brands/asus.png" },
  { name: "MSI", logo: "/images/brands/msi.png" },
  { name: "Lenovo", logo: "/images/brands/lenovo.png" },
  { name: "HP", logo: "/images/brands/hp.png" },
  { name: "Dell", logo: "/images/brands/dell.png" },
  { name: "Acer", logo: "/images/brands/acer.png" },
  { name: "Apple", logo: "/images/brands/apple.png" },
];

export default function BrandsSlider() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Shop by Brand</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Explore products from your favorite brands
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: brands.length > 5 }}
        className="w-full px-10"
      >
        <CarouselContent className="-ml-3">
          {brands.map((brand) => (
            <CarouselItem
              key={brand.name}
              className="basis-1/2 pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <button
                type="button"
                aria-label={`Browse ${brand.name} products`}
                className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-lg font-bold">{brand.name}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}