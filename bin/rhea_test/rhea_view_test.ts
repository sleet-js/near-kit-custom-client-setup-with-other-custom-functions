import {
  near_kit_env,
  rhea_contractId_for_network_env,
  // fun
  ref_get_number_of_pools_function,
  ref_get_pool_function,
  ref_get_pools_function,
  ref_get_deposits_function,
} from "../../src/index";
// ==============================================
console.log(
  await ref_get_number_of_pools_function(
    near_kit_env,
    rhea_contractId_for_network_env,
  ),
);
// ==============================================
console.log(
  await ref_get_pool_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    100,
  ),
);
// ==============================================
console.log(
  await ref_get_pools_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    0,
    10,
  ),
);
// ==============================================
console.log(
  await ref_get_deposits_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    "sleet.testnet",
  ),
);
// ==============================================
