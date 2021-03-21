/* eslint-disable no-throw-literal */
/**
 *
 * @param HerokuclientResponseDTO
 */
const HerokuclientResponseDTOTOClientsResponseMyApiDTO = (
  herokuPoliciesResp,
  herokuClientsResp,
  req
) => {
  const resp = [];
  let clientpolicy;
  let clientsFiltredByName;
  herokuClientsResp.forEach((client) => {
    const policies = herokuPoliciesResp.filter((policie) => policie.clientId === client.id);
    if (policies.length) {
      clientpolicy = policies.map((policieUser) => ({
        id: policieUser.id,
        amountInsured: policieUser.amountInsured,
        inceptionDate: policieUser.inceptionDate,
      }));
      resp.push({ ...client, policies: clientpolicy });
    } else {
      resp.push({ ...client, policies: [] });
    }
  });
  // We filter the clients by name. By defaut the limit of returned clients is 10
  if (req.query.name) {
    clientsFiltredByName = req.query.limit
      ? resp.filter((client) => client.name === req.query.name).slice(0, req.query.limit)
      : resp.filter((client) => client.name === req.query.name).slice(0, 10);
    return clientsFiltredByName;
  }
  if (req.query.limit) return resp.slice(0, req.query.limit);
  return resp.slice(0, 10);
};
/**
 *
 * @param  herokuPoliciesResp
 * @param  herokuClientsResp
 * @param  req
 */
const HerokuclientIDResponseDTOTOClientsByIdResponseMyApiDTO = (
  herokuPoliciesResp,
  herokuClientsResp,
  req
) => {
  let clientpolicy;
  const resp = [];

  const filtredClient = herokuClientsResp.find((client) => client.id === req.params.id);
  if (!filtredClient) throw { statusCode: 400, messageErr: "Client id doesnt exist" };
  const policies = herokuPoliciesResp.filter((policie) => policie.clientId === filtredClient.id);
  if (policies.length) {
    clientpolicy = policies.map((policieUser) => ({
      id: policieUser.id,
      amountInsured: policieUser.amountInsured,
      inceptionDate: policieUser.inceptionDate,
    }));
    resp.push({ ...filtredClient, policies: clientpolicy });
  } else {
    resp.push({ ...filtredClient, policies: [] });
  }
  return resp;
};
/**
 * @param  herokuPoliciesResp
 * @param  req
 */
const HerokuclientIDPoliciesResponseDTOTOClientsByIdPoliciesResponseMyApiDTO = (
  herokuPoliciesResp,
  herokuClientsResp,
  req
) => {
  let clientpolicy;
  const filtredClient = herokuClientsResp.find((client) => client.id === req.params.id);
  if (!filtredClient) throw { statusCode: 400, messageErr: "Client id doesnt exist" };

  const policies = herokuPoliciesResp.filter((policie) => policie.clientId === req.params.id);
  if (policies.length) {
    clientpolicy = policies.map((policieUser) => ({
      id: policieUser.id,
      amountInsured: policieUser.amountInsured,
      inceptionDate: policieUser.inceptionDate,
      email: policieUser.email,
      installmentPayment: policieUser.installmentPayment,
    }));
    return clientpolicy;
  }
  return policies;
};
module.exports = {
  HerokuclientResponseDTOTOClientsResponseMyApiDTO,
  HerokuclientIDResponseDTOTOClientsByIdResponseMyApiDTO,
  HerokuclientIDPoliciesResponseDTOTOClientsByIdPoliciesResponseMyApiDTO,
};
