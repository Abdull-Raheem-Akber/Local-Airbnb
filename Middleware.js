

const express = require("express");
const Listing = require("./Models/Listing.js");
const review = require("./Models/Review.js");
const ExpressError = require("./utils/ExpressError.js");
const { DataSchema, reviewSchema } = require("./Schema.js");
const Review = require("./Models/Review.js");



module.exports.IsLogin = (req, res, next) => {
  req.session.redirectUrl = req.originalUrl;
  // console.log(req.session.redirectUrl, "00");

  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Please Login");
    // console.log(req.session.redirectUrl, "data done 😊 11");
    return res.redirect("/login");
  }
  next();
};

module.exports.savedata = (req, res, next) => {
  console.log(req.session.redirectUrl, "yai data aya hai");

  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }

  next();
};

module.exports.IsOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "Your Have not access");
    return res.redirect(`/listings/${id}`);
  }
  next()
};



module.exports.IsReviewOwner = async (req, res, next) => {
  let { id, reviewId } = req.params;

  let review = await Review.findById(reviewId);
  if (!review.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "Your Have Not Acsess To Delete this review");
    return res.redirect(`/listings/${id}`);
  }
  next()
};




module.exports.validateListing = (req, res, next) => {
  const { error } = DataSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};