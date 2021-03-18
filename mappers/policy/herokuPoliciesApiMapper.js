/* eslint-disable array-callback-return */
/**
 *
 * @param herokupolicyResponseDTO
 * @returns ResponsePolicyMyApiDTO
 */
const HerokupolicyResponseDTOTOResponsePolicyMyApiDTO = (herokupolicyResponseDTO, req) => {
  const responsePolicyMyApiDTO = [];
  herokupolicyResponseDTO.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    delete element.clientId;
    responsePolicyMyApiDTO.push(element);
  });
  if (req.query.limit) return responsePolicyMyApiDTO.slice(0, req.query.limit);
  return responsePolicyMyApiDTO.slice(0, 10);
};

/**
 *
 * @param herokupolicyIdResponseDTO
 * @returns herokuClientRespDTO
 */
const HerokupolicyIdResponseDTOTOResponsePolicyMyApiDTO = (
  herokupolicyIdResponseDTO,
  herokuClientRespDTO,
  req
) => {
  const filtredPolicy = herokupolicyIdResponseDTO.find((policy) => policy.id === req.params.id);
  return [herokuClientRespDTO.find((client) => client.id === filtredPolicy.clientId)];
};

module.exports = {
  HerokupolicyResponseDTOTOResponsePolicyMyApiDTO,
  HerokupolicyIdResponseDTOTOResponsePolicyMyApiDTO,
};
