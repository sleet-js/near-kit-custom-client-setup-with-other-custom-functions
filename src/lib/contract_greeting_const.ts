import { MY_ENV_NEAR_networkId } from "../new-env";
import { getStoredNetworkId } from "../new-hot";
// ===========================================
const hello_testnet_contractId_const = "hello.sleet.testnet";
const hello_mainnet_contractId_const = "hello.sleet.near";
// ===========================================
// env
export const hello_contractId_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? "hello.sleet.testnet"
    : "hello.sleet.near";
// ===========================================
// web
export function hello_contractId_for_network_web() {
  const networkId = getStoredNetworkId();
  const hello_contractId =
    networkId === "testnet"
      ? hello_testnet_contractId_const
      : hello_mainnet_contractId_const;
  console.log("hello contractId", hello_contractId);
  return hello_contractId;
}
// ===========================================
// contact methods
export const greeting_contract_methods = {
  get_greeting: "get_greeting",
  set_greeting: "set_greeting",
};
// ===========================================
