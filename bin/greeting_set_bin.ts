import { hello_contractId_for_network_env } from "../src/lib/contract_greeting_const";
import { greeting_set_greeting_fun } from "../src/fun/greeting/greeting_set_fun";
import { near_kit_env } from "../src/new-env";
// ==============================================
console.log(
  await greeting_set_greeting_fun(
    near_kit_env,
    hello_contractId_for_network_env,
  ),
);
// ==============================================
