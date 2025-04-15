const {
  createReviewService,
  getAllReviewsService,
} = require("../service/review.service");

const createReview = async (req, res) => {
  try {
    const userId = req.user;
    const { comment } = req.body;

    const newReview = await createReviewService(userId, comment);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllReview = async (req, res) => {
  try {
    const review = await getAllReviewsService();
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createReview,
  getAllReview,
};
