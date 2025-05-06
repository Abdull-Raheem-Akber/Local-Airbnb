const User = require("../Models/User.js");


module.exports.RenderSingup = (req, res) => {
    res.render("users/signup.ejs");
  }

  module.exports.Signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;

      let newUser = new User({ username, email });
      let registerUser = await User.register(newUser, password);
      console.log(registerUser);

      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("succes", "Welcome to Airbnb");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }


  module.exports.RenderLogin= (req, res) => {
    res.render("users/login.ejs");
  }


  module.exports.Login =async (req, res) => {

    req.flash("succes", "Welcome to airbnb");
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect( redirectUrl);
  }

  module.exports.Logout = (req, res, next) => {
    req.logOut((error) => {
      if (error) {
        return next(error);
      }
  
      req.flash("error", "You are logout");
      res.redirect("/listings");
    });
  }