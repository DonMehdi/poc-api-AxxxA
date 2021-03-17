const express = require("express");

const app = express();
const helmet = require("helmet");
const clientRoute = require("./routes/client");
const policyRoute = require("./routes/policy");
const authRoute = require("./routes/auth");
const errHandler = require("./middlewares/error");

// Middlewares
app.use(express.json());
app.use(helmet());

/**
 * @Routes
 *  */
app.use("/api/login", authRoute);
app.use("/api/clients", clientRoute);
app.use("/api/policies", policyRoute);

app.use(errHandler);

app.listen(3000, () => console.log("server up and running"));
