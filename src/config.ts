import { readCredentials, type TrelloCredentials } from "./env.ts";

/**
 * Load the Trello credentials the CLI needs to talk to the Trello API.
 *
 * Throws when either credential is missing.
 */
export function loadCredentials(env: NodeJS.ProcessEnv): TrelloCredentials {
  const { apiKey, apiToken } = readCredentials(env);
  if (!apiKey || !apiToken) {
    throw new Error("Trello credentials are not set.");
  }
  return { apiKey, apiToken };
}
