// nearClient
export {
  near_kit_client,
  near_connect_client,
  getStoredNetworkId,
  NETWORK_STORAGE_KEY,
} from "./new";
// network
export {
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
} from "./network";
// archival
export { near_kit_client_archival } from "./new-archival";
