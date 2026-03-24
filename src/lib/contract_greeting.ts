import type { Contract, FinalExecutionOutcome } from "near-kit";
// ===========================================
// Define contract interface using Contract<> helper
export type GREETING_CONTRACT_TYPE = Contract<{
  view: {
    get_greeting: () => Promise<string>;
  };
  call: {
    set_greeting: (args: {
      greeting: string;
    }) => Promise<FinalExecutionOutcome>;
  };
}>;
// ===========================================
