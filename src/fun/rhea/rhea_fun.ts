import { Near } from "near-kit";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import type {
  ref_args_params_interface,
  ref_swap_function_args,
} from "../../lib/contract_rhea_args";
import type { REF_GET_POOL_TYPE } from "../../types/rhea_ref_types";
import { REF_GET_POOL_TYPE_Z_CONST } from "../../types/rhea_ref_types";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// view
// get_number_of_pools
// get_pool
// call
// ===========================================
// ================================================
// ref_get_number_of_pools_function
export async function ref_get_number_of_pools_function(
  near: Near,
  rhea_contractId: string,
): Promise<number> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_number_of_pools,
    {},
  );
  return result as number;
}
// ================================================
// ref_get_pool_function
export async function ref_get_pool_function(
  near: Near,
  rhea_contractId: string,
  pool_id: ref_args_params_interface["pool_id"],
): Promise<REF_GET_POOL_TYPE> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_pool,
    { pool_id: pool_id },
  );
  return REF_GET_POOL_TYPE_Z_CONST.parse(result);
}
// ===========================================
// ===========================================
