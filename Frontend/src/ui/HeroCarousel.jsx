import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = ["/laptop-1.jpg", "/laptop-2.jpg", "/laptop-3.jpg"];

function HeroCarousel() {
  return (
    <Carousel
      className="mx-auto w-full max-w-7xl"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <div className="overflow-hidden rounded-2xl">
              <img
                className="h-[250px] w-full object-cover sm:h-[350px] lg:h-[450px]"
                src={image}
                alt="Laptop"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}

export default HeroCarousel;
