const router = require("express").Router();
const authController = require("../controllers/authorization");

/**
 * @Route
 * Login and get token
 */
router.post("/", authController.signin);

module.exports = router;
