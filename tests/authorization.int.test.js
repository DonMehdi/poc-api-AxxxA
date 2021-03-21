const express = require("express"); // import express
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const authRoute = require("../routes/auth");

const app = express(); // fake express app
app.use(express.json());

app.use("/login", authRoute);

jest.mock("../services/http.js");
const http = require("../services/http.js");

describe("Login Integratin test", () => {
  it("POST /login - success ", async () => {
    http.mockImplementation(() => ({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRhcmUiLCJpYXQiOjE2MTYxNjE3MzcsImV4cCI6MTYxNjE2MjMzN30.DvpN_zmzeqOC37n2g-",
      type: "type",
    }));
    const { body } = await request(app).post("/login").send({
      username: "username",
      password: "password",
    });
    expect(body).toEqual({
      expires_in: 1616162337,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRhcmUiLCJpYXQiOjE2MTYxNjE3MzcsImV4cCI6MTYxNjE2MjMzN30.DvpN_zmzeqOC37n2g-",
      type: "type",
    });
  });
});
