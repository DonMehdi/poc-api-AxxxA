/* eslint-disable no-throw-literal */
/* eslint-disable func-names */
const authController = require("../controllers/authorization");

const next = jest.fn();
jest.mock(
  "../utils/decode.js",
  () =>
    function () {
      return { exp: "decoded" };
    }
);
jest.mock("../services/http.js");
const http = require("../services/http");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
describe("Login Test", () => {
  it("should return 200 if body is valid", async () => {
    http.mockImplementation(() => ({
      token: "token",
      type: "type",
    }));

    const req = {
      body: {
        username: "mockReq",
        password: "mockPass",
      },
    };

    const res = mockResponse();
    await authController.signin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: "token", expires_in: "decoded", type: "type" });
  });

  it("should return 400 if api reponds with 400", async () => {
    http.mockImplementation(() => {
      throw { statusCode: 400 };
    });

    const req = {
      body: {
        wrongsparam: "mockReq", // bad property name (not username)
        password: "mockPass",
      },
    };

    const res = mockResponse();
    await authController.signin(req, res, next);
    expect(next).toHaveBeenCalledWith({ statusCode: 400 });
  });
});
