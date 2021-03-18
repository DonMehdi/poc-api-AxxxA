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
app.use("/login", authRoute);
app.use("/clients", clientRoute);
app.use("/policies", policyRoute);

app.use(errHandler);

app.listen(3000, () => console.log("server up and running"));
