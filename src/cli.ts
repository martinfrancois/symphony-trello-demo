#!/usr/bin/env node
import { loadCredentials } from "./config.ts";

function runStatus(env: NodeJS.ProcessEnv): number {
  try {
    loadCredentials(env);
  } catch (error) {
    process.stderr.write(`${(error as Error).message}\n`);
    return 1;
  }
  process.stdout.write("Trello connection ready.\n");
  return 0;
}

function main(argv: readonly string[]): number {
  const command = argv[0] ?? "status";
  switch (command) {
    case "status":
      return runStatus(process.env);
    default:
      process.stderr.write(`Unknown command: ${command}\n`);
      return 2;
  }
}

process.exit(main(process.argv.slice(2)));
