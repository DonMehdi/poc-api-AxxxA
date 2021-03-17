const router = require("express").Router();
const clientController = require("../controllers/client");
const {
  getClientsValidation,
  getClientsValidatioById,
} = require("../validations/client.validator");

/**
 * @Route
 * Get user by _id
 */
router.get("/:id", getClientsValidatioById("params"), clientController.getClientById);

/**
 * @Route
 * Get the list of client paginated using query params
 */
router.get("/", getClientsValidation("query"), clientController.getClients);

/**
 * @Route
 * Get the client's policies
 */
router.get("/:id/policies", getClientsValidatioById("params"), clientController.getClientPolicies);

module.exports = router;
