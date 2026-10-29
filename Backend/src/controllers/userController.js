import UserRepo from "../repositories/user-repo.js";
import catchAsync from "../utils/asyncHandler.js";

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await UserRepo.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const user = await UserRepo.findById(userId);

  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "User not found!.",
    });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, phone, password, passwordConfirm, avatar } = req.body;

  const user = await UserRepo.insert(
    name,
    email,
    phone,
    password,
    passwordConfirm,
    avatar,
  );
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const { name, email, phone, password, passwordConfirm, avatar, active } =
    req.body;

  const user = await UserRepo.update(
    userId,
    name,
    email,
    phone,
    password,
    passwordConfirm,
    avatar,
    active,
  );

  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "User not found!.",
    });

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const user = await UserRepo.delete(userId);

  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "User not found!.",
    });

  res.status(204).send();
});
