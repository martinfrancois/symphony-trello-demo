export const TRELLO_API_KEY = "TRELLO_API_KEY";
export const TRELLO_API_TOKEN = "TRELLO_API_TOKEN";

export interface TrelloCredentials {
  readonly apiKey: string;
  readonly apiToken: string;
}

export function readCredentials(env: NodeJS.ProcessEnv): Partial<TrelloCredentials> {
  return {
    apiKey: env[TRELLO_API_KEY]?.trim() || undefined,
    apiToken: env[TRELLO_API_TOKEN]?.trim() || undefined,
  };
}
