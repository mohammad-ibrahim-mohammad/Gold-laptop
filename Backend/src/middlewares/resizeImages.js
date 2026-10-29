import catchAsync from "../utils/asyncHandler.js";
import sharp from "sharp";

const resizeProductImages = catchAsync(async (req, res, next) => {
  req.body.images = [];

  await Promise.all(
    req.files.map(async (file, i) => {
      const filename = `${req.params.productId}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize({
          width: 1200,
          height: 1200,
          fit: "inside",
          withoutEnlargement: true,
        })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(`src/public/images/products/${filename}`);

      req.body.images.push(filename);
    }),
  );
  next();
});
export default resizeProductImages;
