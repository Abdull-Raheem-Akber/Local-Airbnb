const Listing = require("../Models/Listing.js");
const Review = require("../Models/Review.js");


module.exports.CreateReview = async (req, res) => {
    
    let listing = await Listing.findById(req.params.id);
    console.log(req.params.id);
    

    // const listing = await Listing.findById(id);

    let newReview = new Review(req.body.review);
newReview.owner = req.user._id
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("review Was Saved");
    req.flash("succes","New Review created ")

    res.redirect(`/listings/${listing._id}`);
  }


  module.exports.DestroyReview =  async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("succes"," Review Deleted ")
  
    res.redirect(`/listings/${id}`);
  }