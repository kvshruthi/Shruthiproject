const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Review = require("../models/News");
//const Vendor = require("../models/Vendor");

// @desc      Get reviews
// @route     GET /api/v1/reviews
// @route     GET /api/v1/bootcamps/:bootcampId/reviews
// @access    Public
exports.getNews = asyncHandler(async (req, res, next) => {
  if (req.params.adminId) {
    const news = await News.find({ admin: req.params.adminId });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single review
// @route     GET /api/v1/reviews/:id
// @access    Public
exports.getNews = asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id).populate({
    path: "admin",
    select: "name description",
  });

  if (!news) {
    return next(
      new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: news,
  });
});

// @desc      Add review
// @route     POST /api/v1/bootcamps/:bootcampId/reviews
// @access    Private
exports.addNews = asyncHandler(async (req, res, next) => {
  req.body.admin = req.params.adminId;
  //req.body.user = req.user.id;

  const admin = await Admin.findById(req.params.adminId);

  if (!admin) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.adminId}`, 404)
    );
  }

  const news = await News.create(req.body);

  res.status(201).json({
    success: true,
    data: news,
  });
});

// @desc      Update review
// @route     PUT /api/v1/reviews/:id
// @access    Private
exports.updateNews = asyncHandler(async (req, res, next) => {
  let news = await News.findById(req.params.id);

  if (!news) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure review belongs to user or user is admin
//   if (review.admin.toString() !== req.admin.id) {
//     return next(new ErrorResponse(`Not authorized to update review`, 401));
//   }

  news = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: news,
  });
});

// @desc      Delete review
// @route     DELETE /api/v1/reviews/:id
// @access    Private
exports.deleteNews = asyncHandler(async (req, res, next) => {
  const news = await Review.findById(req.params.id);

  if (!news) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure review belongs to user or user is admin
  if (review.admin.toString() !== req.user.id ) {
    return next(new ErrorResponse(`Not authorized to update review`, 401));
  }

  await news.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
