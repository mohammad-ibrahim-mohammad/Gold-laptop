import Reviews from "@/features/Reviews/Reviews";
import ReviewForm from "./ReviewForm";
import useReviews from "@/features/Reviews/useReviews";
import { useParams } from "react-router-dom";

function ProductReviews() {
  const { productId } = useParams();
  const { reviews, isLoadingReviews } = useReviews(productId);

  if (isLoadingReviews) return <p>Loading...</p>;
  return (
    <div className="mt-12 grid grid-cols-[600px_1fr] items-start gap-x-9">
      <div className="max-h-100 overflow-y-scroll">
        <Reviews reviews={reviews} />
      </div>
      <ReviewForm />
    </div>
  );
}

export default ProductReviews;
