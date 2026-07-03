import { readCredentials, type TrelloCredentials } from "./env.ts";

const missingCredentialMessages = {
  apiKey:
    "missing Trello API key. Run `export TRELLO_API_KEY=your-key` and try again.",
  apiToken:
    "missing Trello API token. Run `export TRELLO_API_TOKEN=your-token` and try again.",
  both:
    "missing Trello API key and token. Run `export TRELLO_API_KEY=your-key` and `export TRELLO_API_TOKEN=your-token` and try again.",
} as const;

/**
 * Load the Trello credentials the CLI needs to talk to the Trello API.
 *
 * Throws when either credential is missing.
 */
export function loadCredentials(env: NodeJS.ProcessEnv): TrelloCredentials {
  const { apiKey, apiToken } = readCredentials(env);
  if (!apiKey || !apiToken) {
    const missingCredential =
      !apiKey && !apiToken ? "both" : !apiKey ? "apiKey" : "apiToken";
    throw new Error(`Trello status check failed: ${missingCredentialMessages[missingCredential]}`);
  }
  return { apiKey, apiToken };
}
