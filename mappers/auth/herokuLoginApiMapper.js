const decode = require("../../utils/decode");

/**
 *
 * @param loginRequestMyApiDTO
 * @returns HerokuLoginDTO
 */
const loginRequestMyApiDTOToHerokuLoginDTO = (loginRequestMyApiDTO) => ({
  client_id: loginRequestMyApiDTO.username,
  client_secret: loginRequestMyApiDTO.password,
});

/**
 *
 * @param HerokuLoginResponseDTO
 * @returns ResponseMyApiDTO
 */
const HerokuLoginResponseDTOTOResponseMyApiDTO = (HerokuLoginResponseDTO) => ({
  token: HerokuLoginResponseDTO.token,
  type: HerokuLoginResponseDTO.type,
  expires_in: decode(HerokuLoginResponseDTO.token).exp,
});

module.exports = { loginRequestMyApiDTOToHerokuLoginDTO, HerokuLoginResponseDTOTOResponseMyApiDTO };
