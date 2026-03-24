import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
import { greeting_contract_methods } from "../../lib/contract_greeting_const";
// ===========================================
export async function greeting_set_greeting_fun(
  near: Near,
  greeting_contractId: string,
) {
  const result = await near.call(
    greeting_contractId,
    greeting_contract_methods.set_greeting,
    { greeting: "Hello, from NEAR-KIT!" },
    { gas: "3 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
