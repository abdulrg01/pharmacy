const Review = require("../model/review.model");

const createReviewService = async (userId, comment) => {
  const review = new Review({
    user: userId,
    comment,
  });

  return await review.save();
};

const getAllReviewsService = async () => {
  return await Review.find().populate("user", "name email");
};

module.exports = {
  createReviewService,
  getAllReviewsService,
};
