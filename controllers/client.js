const routes = require("../config/endpoints");
const http = require("../services/http");
const {
  HerokuclientResponseDTOTOClientsResponseMyApiDTO,
  HerokuclientIDResponseDTOTOClientsByIdResponseMyApiDTO,
  HerokuclientIDPoliciesResponseDTOTOClientsByIdPoliciesResponseMyApiDTO,
} = require("../mappers/client/herokuClientsApiMapper");

exports.getClients = async (req, res, next) => {
  try {
    /**
     * Calling the heroku api
     */
    const requestClients = {
      uri: routes.endpoint + routes.clients,
      options: {
        method: "get",
        headers: { Authorization: `Bearer ${req.token}`, "Content-Type": "application/json" },
      },
    };
    const herokuClientsResp = await http(requestClients);
    const requestPolicies = { ...requestClients, uri: routes.endpoint + routes.policies };
    const herokuPoliciesResp = await http(requestPolicies);
    /*
     * Mapping the api response to our api response
     */
    const myApiClientResp = HerokuclientResponseDTOTOClientsResponseMyApiDTO(
      herokuPoliciesResp,
      herokuClientsResp,
      req
    );
    // console.log(myApiRespi);
    res.status(200).json(myApiClientResp);
  } catch (err) {
    next(err);
  }
};

exports.getClientById = async (req, res, next) => {
  try {
    /**
     * Calling the heroku api
     */
    const requestClients = {
      uri: routes.endpoint + routes.clients,
      options: {
        method: "get",
        headers: { Authorization: `Bearer ${req.token}`, "Content-Type": "application/json" },
      },
    };
    const herokuClientsResp = await http(requestClients);
    const requestPolicies = { ...requestClients, uri: routes.endpoint + routes.policies };
    const herokuPoliciesResp = await http(requestPolicies);

    /*
     * Mapping the api response to our api response
     */
    const myApiClientResp = HerokuclientIDResponseDTOTOClientsByIdResponseMyApiDTO(
      herokuPoliciesResp,
      herokuClientsResp,
      req
    );
    // console.log(myApiRespi);
    res.status(200).json(myApiClientResp);
  } catch (err) {
    next(err);
  }
};

exports.getClientPolicies = async (req, res, next) => {
  try {
    /**
     * Calling the heroku api
     */
    const requestClients = {
      uri: routes.endpoint + routes.clients,
      options: {
        method: "get",
        headers: { Authorization: `Bearer ${req.token}`, "Content-Type": "application/json" },
      },
    };
    const requestPolicies = { ...requestClients, uri: routes.endpoint + routes.policies };
    const herokuPoliciesResp = await http(requestPolicies);

    /*
     * Mapping the api response to our api response
     */
    const myApiClientResp = HerokuclientIDPoliciesResponseDTOTOClientsByIdPoliciesResponseMyApiDTO(
      herokuPoliciesResp,
      req
    );
    // console.log(myApiRespi);
    res.status(200).json(myApiClientResp);
  } catch (err) {
    next(err);
  }
};
