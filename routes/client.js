const router = require("express").Router();
const clientController = require("../controllers/client");

/**
 * @Route
 * Get user by _id
 */
router.get("/:clientId", clientController.getClientById);

/**
 * @Route
 * Get the list of client paginated
 */
router.get("/", clientController.getClients);

/**
 * @Route
 * Get the client's policies
 */
router.get("/:clientId/policies", clientController.getClientPolicies);

module.exports = router;
