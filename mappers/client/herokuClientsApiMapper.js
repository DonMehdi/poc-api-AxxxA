/**
 *
 * @param clientRequestMyApiDTO
 * @returns HerokuclientDTO
 */
const clientRequestMyApiDTOToHerokuclientDTO = (clientRequestMyApiDTO) => ({
  client_id: clientRequestMyApiDTO.username,
  client_secret: clientRequestMyApiDTO.password,
});

/**
 *
 * @param HerokuclientResponseDTO
 * @returns ResponseMyApiDTO
 */
const HerokuclientResponseDTOTOClientsResponseMyApiDTO = () => ({});

module.exports = {
  clientRequestMyApiDTOToHerokuclientDTO,
  HerokuclientResponseDTOTOClientsResponseMyApiDTO,
};
