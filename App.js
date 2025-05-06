if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// console.log(process.env.data);

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./Models/Listing.js");
const Review = require("./Models/Review.js");
var methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const WrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");
const passport = require("passport");
const User = require("./Models/User.js");
const localStrategy = require("passport-local");

const listingRouter = require("./Routes/listings.js");
const reviewRoutrer = require("./Routes/reviews.js");
const userRoutrer = require("./Routes/user.js");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const dbUrl = process.env.ALTASTDB_URL;

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error",()=>{
console.log("This is the Error in the Mongo Session Store ", erro);

})

const sessionOption = {
   store,
  secret: "process.env.SECRET",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.listen(port, () => {
  console.log("App is Working");
});

// Setup Ejs
app.set("view engine", "ejs"), app.set("views", path.join(__dirname, "views"));

// Setup Ejs-mate
app.engine("ejs", ejsMate);

// data parsing
app.use(express.urlencoded({ extended: true }));

// Method Override
app.use(methodOverride("_method"));

// Static file Setup
app.use(express.static(path.join(__dirname, "public")));

// Mongoose Connection


main()
  .then((res) => {
    console.log("Connection Build");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

// Listening

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.succes = req.flash("succes");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;

  next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRoutrer);
app.use("/", userRoutrer);

// app.get("/fake", async  (req,res)=>{

// let FakeUser = new User ({

// email:"achabaCHA@gamil.com",
// username:"Achabacha"

// })

// let FakeUser1 = await User.register(FakeUser,"heloowworld")

// res.send(FakeUser)

// })

// 1 Rout Main

// Reviews

// Post Review Rout

// Error Handling MiddleWare

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;

  res.status(statusCode).render("listings/error.ejs", { message });
});
