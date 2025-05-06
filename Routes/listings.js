const express = require("express");
const router = express.Router();
const Listing = require("../Models/Listing.js");
const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { DataSchema, reviewSchema } = require("../Schema.js");
const { IsLogin, IsOwner, validateListing } = require("../Middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../Cloud.js")
const upload = multer({ storage })


router.route("/")
  .get(WrapAsync(listingController.index))
  .post(IsLogin, upload.single('img'),validateListing, WrapAsync(listingController.CreateListings));

  
  

  

router.get("/new", IsLogin, listingController.RenderListings);


router.route("/:id")
  .get(WrapAsync(listingController.ShowListings))
  .put(IsLogin, IsOwner,upload.single('img'),validateListing, WrapAsync(listingController.UpdateListings))
  .delete(IsLogin, IsOwner, WrapAsync(listingController.destroyListing));

router.get(
  "/:id/edit",
  IsLogin,
  IsOwner,
  WrapAsync(listingController.RenderEditListing)
);

module.exports = router;
