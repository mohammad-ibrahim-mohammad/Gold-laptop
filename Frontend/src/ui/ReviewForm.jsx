import { Rating } from "@mui/material";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";

function ReviewForm() {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { rating: 0, content: "" },
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-100 w-[90%] border-2 border-gray-100 px-8 py-10"
    >
      <div className="flex flex-col items-start gap-8">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Share your experience
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your feedback helps other customers make better decisions.
          </p>
        </div>

        <div className="flex gap-6">
          <label className="text-md font-semibold text-gray-500">
            Your rating:
          </label>
          <Controller
            name="rating"
            control={control}
            rules={{
              required: "Please select a rating",
              min: {
                value: 1,
                message: "Please select a rating",
              },
            }}
            render={({ field }) => (
              <Rating
                value={field.value}
                onChange={(_, newValue) => field.onChange(newValue)}
                sx={{ direction: "ltr" }}
              />
            )}
          />
          <p>{errors.rating?.message}</p>
        </div>

        <div className="flex w-full flex-col items-start gap-6">
          <label className="text-md font-semibold text-gray-500">
            Your review:
          </label>

          <Textarea
            className="h-20 w-100 text-lg"
            placeholder="Tell us what you think about this product..."
            {...register("content", {
              required: "Review is required",
              minLength: {
                value: 10,
                message: "Review must be at least 10 characters",
              },
            })}
          />
          <p>{errors.content?.message}</p>
        </div>
      </div>
      <Button className="mt-6 w-full" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ReviewForm;
