import { test } from "node:test";
import assert from "node:assert/strict";
import { loadCredentials } from "../src/config.ts";

test("loadCredentials returns both credentials when present", () => {
  const creds = loadCredentials({ TRELLO_API_KEY: "key-123", TRELLO_API_TOKEN: "token-456" });
  assert.deepEqual(creds, { apiKey: "key-123", apiToken: "token-456" });
});

test("loadCredentials fails when the token is missing", () => {
  assert.throws(
    () => loadCredentials({ TRELLO_API_KEY: "key-123" }),
    /Trello status check failed: missing Trello API token\. Run `export TRELLO_API_TOKEN=your-token` and try again\./,
  );
});
