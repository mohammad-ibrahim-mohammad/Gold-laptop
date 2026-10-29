import ProductRepo from "../repositories/product-repo.js";
import catchAsync from "../utils/asyncHandler.js";

export const getProducts = catchAsync(async (req, res, next) => {
  console.log(req.query);
  let { sort = "id", limit, category, brand } = req.query;
  const direction = sort.startsWith("-") ? "DESC" : "ASC";
  const sortBy = sort.replace(/^-/, "");
  const categoriesFilter = !category
    ? []
    : Array.isArray(category)
      ? category
      : [category];
  const brandsFilter = !brand ? [] : Array.isArray(brand) ? brand : [brand];

  const products = await ProductRepo.find(
    sortBy,
    direction,
    limit,
    categoriesFilter,
    brandsFilter,
  );

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

export const getProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const product = await ProductRepo.findById(productId);

  if (!product)
    return res.status(404).json({
      status: "fail",
      message: "Product not found!",
    });

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

export const createProduct = catchAsync(async (req, res) => {
  const {
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
  } = req.body;
  const product = await ProductRepo.insert(
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
  );

  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});

export const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const {
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
    images,
  } = req.body;
  const product = await ProductRepo.update(
    productId,
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
    images,
  );
  if (!product)
    return res.status(404).json({
      status: "success",
      message: "Product not found!",
    });

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

export const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const product = await ProductRepo.delete(productId);

  if (!product)
    return res.status(404).json({
      status: "success",
      message: "Product not found!",
    });

  res.status(204).send();
});
