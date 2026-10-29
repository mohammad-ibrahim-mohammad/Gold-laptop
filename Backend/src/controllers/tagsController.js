import catchAsync from "../utils/asyncHandler.js";
import TagRepo from "../repositories/tags-repo.js";
import sendReq from "../utils/requestHandler.js";

export const getTags = catchAsync(async (req, res, next) => {
  const tags = await TagRepo.find();

  sendReq(res, 200, {
    results: tags.length,
    data: { tags },
  });
});
export const getTag = catchAsync(async (req, res, next) => {
  const { tagId } = req.params;

  const tag = await TagRepo.findById(tagId);
  if (!tag)
    return sendReq(res, 404, {
      message: "Tag not found!.",
    });
  sendReq(res, 200, {
    data: { tag },
  });
});

export const createTag = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const tag = await TagRepo.insert(name);

  sendReq(res, 201, {
    data: { tag },
  });
});

export const updateTag = catchAsync(async (req, res, next) => {
  const { tagId } = req.params;
  const { name } = req.body;

  const tag = await TagRepo.update(tagId, name);
  if (!tag)
    return sendReq(res, 404, {
      message: "Tag not found!.",
    });

  sendReq(res, 201, {
    data: { tag },
  });
});

export const deleteTag = catchAsync(async (req, res, next) => {
  const { tagId } = req.params;

  const tag = await TagRepo.delete(tagId);
  if (!tag)
    return sendReq(res, 404, {
      message: "Tag not found!.",
    });
  sendReq(res, 204);
});
