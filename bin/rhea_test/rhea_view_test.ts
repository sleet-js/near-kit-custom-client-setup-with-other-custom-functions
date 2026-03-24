import {
  near_kit_env,
  rhea_contractId_for_network_env,
  ref_get_number_of_pools_function,
} from "../../src/index";
// ==============================================
console.log(
  await ref_get_number_of_pools_function(
    near_kit_env,
    rhea_contractId_for_network_env,
  ),
);
// ==============================================
