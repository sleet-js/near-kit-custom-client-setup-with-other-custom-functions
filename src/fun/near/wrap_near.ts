import { Near } from "near-kit";
import type { FinalExecutionOutcome, } from "near-kit";
import { wrap_near_methods_const } from "@sleet-js/wrap-near-contract-methods-const";
import type { AmountInput } from "../../types/AmountInput";
// ===========================================
export async function wrap_near_deposit_fun_with_string_unit_amount(
  near: Near,
  wrap_contractId: string,
  amount: AmountInput, // e.g. "1 NEAR" or "0.5 NEAR"
) {
  // near_deposit takes no args, just attachedDeposit
  const result = await near.call(
    wrap_contractId,
    wrap_near_methods_const.near_deposit,
    {}, // no args
    { attachedDeposit: amount }, // how much NEAR to wrap
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
