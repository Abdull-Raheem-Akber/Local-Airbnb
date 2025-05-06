const Joi = require("joi");
const Review = require("./Models/Review");

module.exports.DataSchema = Joi.object({
  title: Joi.string().required(),
  des: Joi.string().required(),
  country: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.number().required().min(0),
  img: Joi.string().allow("", null),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
