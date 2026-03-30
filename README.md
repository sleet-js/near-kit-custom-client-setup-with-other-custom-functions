# ⚠️ DEPRECATED

This package is deprecated. Please use the new modular packages instead:

- **@near-kit-tool-box/web** - Browser NEAR client with Hot Wallet Connect
- **@near-kit-tool-box/env** - Backend NEAR client with .env support  
- **@near-kit-tool-box/fun** - Reusable contract functions

## Migration

```bash
# Remove old package
npm uninstall @sleet-js/near-kit-custom-client-setup-with-other-custom-functions

# Install new packages (only what you need)
npm install @near-kit-tool-box/web @near-kit-tool-box/fun
# or for backend:
npm install @near-kit-tool-box/env @near-kit-tool-box/fun
```

## New Usage

```js
// Before
import { near_kit_client, greeting_get_greeting_fun } from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";

// After
import { near_kit_client } from "@near-kit-tool-box/web";
import { greeting_get_greeting_fun } from "@near-kit-tool-box/fun";
```

See [@near-kit-tool-box](https://github.com/sleet-js/near-kit-tool-box) for full documentation.

copyright 2026 by sleet.near
