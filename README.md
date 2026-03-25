# near-kit-custom-client-setup-with-other-custom-functions

a custom near-kit near client setup with hot wallet connect and functions for interacting with common smart contracts to assist in dapp development.

~~ℹ️ expected for use in browser environment~~

ℹ️ developed for internal use and i don't have time to documnet everything

ℹ️ no error handling

ℹ️ not an exchustive list of functions, but i can add based on request

---

develop and publish this package

```bash
bun install
bun update --latest
bun run tsc --noEmit
# bun run index.ts
bun run build
bun publish --dry-run
bunx npm login
bun publish --access public

# prettier
bunx prettier . --write
bunx prettier . --check
```

---

### FEATURES

- dynamic network support
- typescript
- ~~svelte auth and network button~~
- hot near connect
- archival client for viewing older data
- multiple clients set up and reusable functions that accept near client as an argument so they can be reused in the browser or locally

## HOW TO USE

add

```sh
npm i @sleet-js/near-kit-custom-client-setup-with-other-custom-functions
bun add @sleet-js/near-kit-custom-client-setup-with-other-custom-functions
```

import for browser

```js
import {
  near_kit_client,
  near_connect_client,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
```

---

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

copyright 2026 by sleet.near
