const routes = require("../config/endpoints");
const http = require("../services/http");
const {
  loginRequestMyApiDTOToHerokuLoginDTO,
  HerokuLoginResponseDTOTOResponseMyApiDTO,
} = require("../mappers/auth/herokuLoginApiMapper");

exports.signin = async (req, res, next) => {
  try {
    /**
     * Mapping our api request to the heroku api
     */
    const apiRequest = loginRequestMyApiDTOToHerokuLoginDTO(req.body);

    /**
     * Calling the heroku api
     */
    const request = {
      uri: routes.endpoint + routes.login,
      options: {
        method: "post",
        body: JSON.stringify(apiRequest),
        headers: { "Content-Type": "application/json" },
      },
    };
    const herokuLoginResp = await http(request);
    /**
     * Mapping the api response to our api response
     */
    const myApiRespi = HerokuLoginResponseDTOTOResponseMyApiDTO(herokuLoginResp);

    res.status(200).json(myApiRespi);
  } catch (err) {
    next(err);
  }
};
