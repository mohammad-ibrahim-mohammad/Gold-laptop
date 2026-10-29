import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductItem from "@/features/Products/ProductItem";
import useProducts from "@/features/Products/useProducts";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

function DiscountedProducts() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading discounted products...</p>;
  if (error) return <p>Failed to load products.</p>;

  const discountedProducts = products.filter(
    (product) =>
      product.discount_price != null &&
      Number(product.discount_price) < Number(product.regular_price),
  );

  const groups = [];
  for (let i = 0; i < discountedProducts.length; i += 5) {
    groups.push(discountedProducts.slice(i, i + 5));
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Discounted Products</h2>

        <Button variant="outline" asChild>
          <Link to="/products">View All</Link>
        </Button>
      </div>

      {discountedProducts.length === 0 ? (
        <p>No discounted products available.</p>
      ) : (
        <Carousel opts={{ loop: groups.length > 1 }} className="w-full">
          <CarouselContent>
            {groups.map((group, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 items-start gap-2 pb-8 sm:grid-cols-3 lg:grid-cols-5">
                  {group.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
}

export default DiscountedProducts;
