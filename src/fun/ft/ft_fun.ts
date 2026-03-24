import { Near } from "near-kit";
import { ft_methods_const } from "@sleet-js/ft-methods-const";
import type { ft_args_params_interface } from "../../lib/contract_ft_args";
// ===========================================
// view
// ft_balance_of
// call
// ===========================================
export async function ft_balance_of_fun(
  near: Near,
  ft_contractId: string,
  account_id: ft_args_params_interface["account_id"],
) {
  const result = await near.view(
    ft_contractId,
    ft_methods_const.ft_balance_of,
    { account_id: account_id },
  );
  return result as string;
}
// ===========================================
