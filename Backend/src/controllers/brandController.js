import BrandRepo from "../repositories/brand-repo.js";
import catchAsync from "../utils/asyncHandler.js";

export const getBrands = catchAsync(async (req, res) => {
  const brands = await BrandRepo.find();

  res.status(200).json({
    status: "success",
    results: brands.length,
    data: { brands },
  });
});

export const getBrand = catchAsync(async (req, res) => {
  const brand = await BrandRepo.findById(req.params.id);

  if (!brand) {
    return res.status(404).json({
      status: "fail",
      message: "Brand not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: { brand },
  });
});

export const createBrand = catchAsync(async (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Brand name is required",
    });
  }

  const brand = await BrandRepo.insert(name.trim());

  res.status(201).json({
    status: "success",
    data: { brand },
  });
});

export const updateBrand = catchAsync(async (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Brand name is required",
    });
  }

  const brand = await BrandRepo.update(req.params.id, name.trim());

  if (!brand) {
    return res.status(404).json({
      status: "fail",
      message: "Brand not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: { brand },
  });
});

export const deleteBrand = catchAsync(async (req, res) => {
  const brand = await BrandRepo.delete(req.params.id);

  if (!brand) {
    return res.status(404).json({
      status: "fail",
      message: "Brand not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: { brand },
  });
});
