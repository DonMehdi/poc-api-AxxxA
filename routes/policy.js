const router = require("express").Router();
const policyController = require("../controllers/policy");
const {
  getPoliciessValidation,
  getPoliciessValidationById,
} = require("../validations/policy.validator");
const verifyToken = require("../middlewares/verifyToken");

/**
 * @Middleware
 * Allow only authenticated users
 *  */
router.use(verifyToken.verification);
/**
 * @Route
 * Get the list of policies' client paginated and limited to 10 elements by default.
 */
router.get("/", getPoliciessValidation("query"), policyController.getPolicies);

/**
 * @Route
 * Get the details of a policy's client
 */
router.get("/:id", getPoliciessValidationById("params"), policyController.getUserByPolicyId);

module.exports = router;
