const router = require("express").Router();
const policyController = require("../controllers/policy");

/**
 * @Route
 * Get the list of policies' client paginated and limited to 10 elements by default.
 */
router.get("/", policyController.getPolicies);

/**
 * @Route
 * Get the details of a policy's client
 */
router.get("/:id", policyController.getUserByPolicyId);

module.exports = router;
