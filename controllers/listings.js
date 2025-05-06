const Listing = require("../Models/Listing.js");

module.exports.index = async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.RenderListings = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.ShowListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", " Listing your requested does not exist ");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.CreateListings = async (req, res, next) => {
  let { title, des, img, price, location, country } = req.body;
  let NewListing = new Listing({ title, des, img, price, location, country });
  NewListing.owner = req.user._id;
  let url = req.file.path;
  let filename = req.file.filename;

  NewListing.img = { url, filename };

  await NewListing.save();
  req.flash("succes", "New Listing created ");
  res.redirect("/listings");
};

module.exports.RenderEditListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", " Listing your requested does not exist ");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};

module.exports.UpdateListings = async (req, res) => {
  let { id } = req.params;
  let { title, des, img, price, location, country } = req.body;

  let NewListing   =await Listing.findByIdAndUpdate(id, {
    title: title,
    des: des,
    img: img,
    price: price,
    location: location,
    country: country,
  })
  
  if( typeof req.file !== "undefined"){

    let url = req.file.path;
    let filename = req.file.filename;
    NewListing.img = { url, filename };
    await NewListing.save()
  }
  
  
  
  req.flash("succes", " Listing Update ");

  res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let delListing = await Listing.findByIdAndDelete(id);
  console.log(delListing);
  req.flash("succes", " Listing Deleted ");

  res.redirect("/listings");
};
