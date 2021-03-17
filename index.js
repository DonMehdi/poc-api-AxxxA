const express = require("express");
const app = express();
const helmet = require("helmet");
const clientRoute = require("./routes/client");
const policyRoute = require("./routes/policy");
const authRoute = require("./routes/auth");

//Middlewares
app.use(express.json());
app.use(helmet());

/**
 * @Routes
 *  */
app.use("/api/login", authRoute);
app.use("/api/clients", clientRoute);
app.use("/api/policies", policyRoute);

app.listen(3000, () => console.log("server up and running"));
