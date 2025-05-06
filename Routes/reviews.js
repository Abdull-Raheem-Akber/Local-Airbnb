const express = require("express");
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require("../Schema.js");
const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../Models/Review.js");
const Listing = require("../Models/Listing.js");
const { IsLogin, IsReviewOwner } = require("../Middleware.js");
const ReviewController = require("../controllers/Review.js");

// Review-Validate
const reviewValidate = (req, res, next) => {
  console.log(req.body);
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// inshallahg maui future dollar trillionare banoo ga                                           Reviews-Routes

// Post Rout
router.post(
  "/",
  IsLogin,
  reviewValidate,
  WrapAsync(ReviewController.CreateReview)
);

// Delete Rout

router.delete(
  "/:reviewId",
  IsLogin,
  IsReviewOwner,
  ReviewController.DestroyReview
);

module.exports = router;
