// ===========================================
// ===========================================
// web
// near_kit_client
export {
  near_kit_client,
  near_connect_client,
  getStoredNetworkId,
  NETWORK_STORAGE_KEY,
} from "./new-hot";
// network
export {
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
} from "./network";
// archival
export { near_kit_client_archival } from "./new-archival";
// ===========================================
// ===========================================
// backend
// near_kit_env
export {
  near_kit_env,
  MY_ENV_NEAR_networkId,
  MY_ENV_NEAR_accountId,
  MY_ENV_NEAR_publicKey,
  MY_ENV_NEAR_privateKey,
} from "./new-env";
// ===========================================
// ===========================================
// utility
// ==== greeting ====
export type { greeting_args_params_interface } from "./lib/contract_greeting_args";
export {
  hello_contractId_for_network_env,
  hello_contractId_for_network_web,
  greeting_contract_methods,
} from "./lib/contract_greeting_const";
// ==== rhea ====
export type {
  ref_args_params_interface,
  ref_swap_action_type,
  ref_swap_function_args,
} from "./lib/contract_rhea_args";
export {
  rhea_contractId_for_network_env,
  rhea_contractId_for_network_web,
  ref_exchange_methods_const,
} from "./lib/contract_rhea_const";
// ==== ft ====
export { ft_methods_const } from "@sleet-js/ft-methods-const";
export type { ft_args_params_interface } from "./lib/contract_ft_args";
// ==== wrap near ====
export {
  wrap_contractId_for_network_env,
  wrap_contractId_for_network_web,
  wrap_near_methods_const,
} from "./lib/contract_near_wrap_const";
// ===========================================
// ===========================================
// fun
// ==== greeting ====
export { greeting_get_greeting_fun } from "./fun/greeting/greeting_get_fun";
export { greeting_set_greeting_fun } from "./fun/greeting/greeting_set_fun";
// ==== rhea ====
export {
  ref_get_number_of_pools_function,
  ref_get_deposits_function,
  ref_get_pool_function,
  ref_get_pools_function,
} from "./fun/rhea/rhea_fun";
// ==== ft ====
export {
  ft_balance_of_fun,
  ft_transfer_fun,
  ft_transfer_call_fun,
  ft_storage_deposit_fun,
} from "./fun/ft/ft_fun";
// ==== wrap near ====
export {
  wrap_near_deposit_fun,
  wrap_near_withdraw_fun,
} from "./fun/near/wrap_near";
// ===========================================
// ===========================================
// types
export type { AmountInput } from "./types/AmountInput";
// ===========================================
// ===========================================
// copyright 2026 by sleet.near
