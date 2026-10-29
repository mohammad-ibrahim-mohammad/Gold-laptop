import CategoryRepo from "../repositories/category-repo.js";
import catchAsync from "../utils/asyncHandler.js";

export const getCategories = catchAsync(async (req, res, next) => {
  const categories = await CategoryRepo.find();

  res.status(200).json({
    status: "success",
    results: categories.length,
    data: {
      categories,
    },
  });
});

export const getCategory = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const category = await CategoryRepo.findById(categoryId);

  if (!category)
    return res.status(404).json({
      status: "fail",
      message: "Category not found!.",
    });

  res.status(200).json({
    status: "success",
    data: {
      category,
    },
  });
});

export const createCategory = catchAsync(async (req, res, next) => {
  const { name, parent_id } = req.body;
  const category = await CategoryRepo.insert(name, parent_id);

  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});

export const updateCategory = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const { name, parent_id } = req.body;

  const category = await CategoryRepo.update(categoryId, name, parent_id);

  if (!category)
    return res.status(404).json({
      status: "fail",
      message: "Category not found!.",
    });
  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;

  const category = await CategoryRepo.delete(categoryId);

  if (!category)
    return res.status(404).json({
      status: "fail",
      message: "Category not found!.",
    });

  res.status(204).send();
});
