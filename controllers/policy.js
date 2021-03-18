const routes = require("../config/endpoints");
const http = require("../services/http");
const {
  HerokupolicyResponseDTOTOResponsePolicyMyApiDTO,
  HerokupolicyIdResponseDTOTOResponsePolicyMyApiDTO,
} = require("../mappers/policy/herokuPoliciesApiMapper");

exports.getPolicies = async (req, res, next) => {
  try {
    /**
     * Calling the heroku api
     */
    const requestPolicies = {
      uri: routes.endpoint + routes.policies,
      options: {
        method: "get",
        headers: { Authorization: `Bearer ${req.token}`, "Content-Type": "application/json" },
      },
    };
    const herokuPoliciesResp = await http(requestPolicies);
    /*
     * Mapping the api response to our api response
     */
    const myApiClientResp = HerokupolicyResponseDTOTOResponsePolicyMyApiDTO(
      herokuPoliciesResp,
      req
    );
    // console.log(myApiRespi);
    res.status(200).json(myApiClientResp);
  } catch (err) {
    next(err);
  }
};

exports.getUserByPolicyId = async (req, res, next) => {
  try {
    /**
     * Calling the heroku api
     */
    const requestPolicies = {
      uri: routes.endpoint + routes.policies,
      options: {
        method: "get",
        headers: { Authorization: `Bearer ${req.token}`, "Content-Type": "application/json" },
      },
    };
    const herokuPoliciesResp = await http(requestPolicies);
    const requestClients = { ...requestPolicies, uri: routes.endpoint + routes.clients };
    const herokuClientResp = await http(requestClients);

    /*
     * Mapping the api response to our api response
     */
    const myApiPolicyResp = HerokupolicyIdResponseDTOTOResponsePolicyMyApiDTO(
      herokuPoliciesResp,
      herokuClientResp,
      req
    );
    // console.log(myApiRespi);
    res.status(200).json(myApiPolicyResp);
  } catch (err) {
    next(err);
  }
};
