import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

import { Star } from "lucide-react";

function RatingStars({ rating, size = 18 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function ReviewItem({ review }) {
  const userName = review.user?.name || "Anonymous";
  const userEmail = review.user?.email || "";
  const userPhoto = review.user?.photo;

  const formattedDate = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString()
    : "";

  return (
    <div className="py-6">
      <div className="flex gap-4">
        {/* User Avatar */}
        <Avatar className="h-11 w-11 rounded-none">
          <AvatarImage
            src={userPhoto}
            alt={userName}
            className="object-cover"
          />

          <AvatarFallback className="rounded-none">
            {userName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          {/* User Info */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold">{userName}</h3>

              {userEmail && (
                <p className="text-muted-foreground text-sm">{userEmail}</p>
              )}
            </div>

            {formattedDate && (
              <span className="text-muted-foreground text-sm">
                {formattedDate}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="mt-2">
            <RatingStars rating={review.rating} />
          </div>

          {/* Review */}
          <p className="text-muted-foreground mt-3 leading-7">
            {review.review}
          </p>
        </div>
      </div>
    </div>
  );
}

function Reviews({ reviews = [] }) {
  const totalReviews = reviews.length;

  return (
    <section className="w-full">
      <Card className="rounded-none border-2 border-gray-100 px-2 py-4">
        <CardHeader>
          <CardTitle className="mt-6 text-center text-2xl font-bold text-gray-700">
            Customer Reviews
          </CardTitle>
        </CardHeader>

        <CardContent>
          {totalReviews === 0 ? (
            <div className="py-10 text-center">
              <p className="text-muted-foreground">No reviews yet.</p>

              <p className="text-muted-foreground mt-1 text-sm">
                Be the first to review this product.
              </p>
            </div>
          ) : (
            <div>
              {reviews.map((review) => (
                <div key={review.id}>
                  <ReviewItem review={review} />

                  <Separator />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

export default Reviews;
