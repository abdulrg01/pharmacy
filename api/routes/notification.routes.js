const router = require("express").Router();
const verifyJWT = require("../middleware/verifyJwt");
const controller = require("../controller/notification.controller");

router.route("/get-notification").get(verifyJWT, controller.getNotification);

router
  .route("/update-notification/:id")
  .patch(verifyJWT, controller.updateNotification);

module.exports = router;
