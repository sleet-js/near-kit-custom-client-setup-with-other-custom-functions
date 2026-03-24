import {
  near_kit_env,
  hello_contractId_for_network_env,
  greeting_get_greeting_fun,
} from "../src/index";
// ==============================================
console.log(
  await greeting_get_greeting_fun(
    near_kit_env,
    hello_contractId_for_network_env,
  ),
);
// ==============================================
