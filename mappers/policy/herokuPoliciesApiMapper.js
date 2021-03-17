/**
 *
 * @param policyRequestMyApiDTO
 * @returns HerokupolicyDTO
 */
const policyRequestMyApiDTOToHerokupolicyDTO = (policyRequestMyApiDTO) => ({
  policy_id: policyRequestMyApiDTO.username,
  policy_secret: policyRequestMyApiDTO.password,
});

/**
 *
 * @param HerokupolicyResponseDTO
 * @returns ResponsePolicyMyApiDTO
 */
const HerokupolicyResponseDTOTOResponsePolicyMyApiDTO = (HerokupolicyResponseDTO) => {
  const responsePolicyMyApiDTO = [];
  HerokupolicyResponseDTO.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    delete element.clienId;
    responsePolicyMyApiDTO.push(element);
  });
  return responsePolicyMyApiDTO;
};

module.exports = {
  policyRequestMyApiDTOToHerokupolicyDTO,
  HerokupolicyResponseDTOTOResponsePolicyMyApiDTO,
};
