// Vite 8 expects `CustomEvent` to exist (Node 20+). This polyfill lets the dev server run on Node 18.
// It’s intentionally minimal: Vite mainly uses `event.detail`.
class CustomEventPolyfill extends Event {
  constructor(type, params = {}) {
    super(type, params);
    this.detail = params.detail;
  }
}

if (typeof globalThis.CustomEvent === "undefined") {
  globalThis.CustomEvent = CustomEventPolyfill;
}

// Launch Vite CLI as usual (import by file path to bypass `exports` restrictions).
import path from "node:path";
import { pathToFileURL } from "node:url";

const viteCliUrl = pathToFileURL(path.resolve("node_modules/vite/bin/vite.js")).href;
await import(viteCliUrl);

