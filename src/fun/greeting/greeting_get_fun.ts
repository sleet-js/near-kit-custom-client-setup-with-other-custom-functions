import { Near } from "near-kit";
import { greeting_contract_methods } from "../../lib/contract_greeting_const";
// ===========================================
export async function greeting_get_greeting_fun(
  greeting_contractId: string,
  near: Near,
) {
  const result = await near.view(
    greeting_contractId,
    greeting_contract_methods.get_greeting,
  );
  return result as string;
}
// ===========================================
