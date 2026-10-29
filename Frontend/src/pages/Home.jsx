import BrandsSlider from "@/features/Brands/BrandsSlider";
import DiscountedProducts from "@/features/Products/DiscountedProducts";
import HeroCarousel from "@/ui/HeroCarousel";

function Home() {
  return (
    <h2>
      <HeroCarousel />
      <DiscountedProducts />
      <BrandsSlider />
    </h2>
  );
}

export default Home;
