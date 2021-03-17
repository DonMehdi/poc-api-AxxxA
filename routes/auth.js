const router = require("express").Router();
const authController = require("../controllers/authorization");
const loginValidation = require("../validations/auth.validator");

/**
 * @Route
 * Login and get token
 */
router.post("/", loginValidation, authController.signin);

module.exports = router;
