# symphony-trello-demo-cli

A small, disposable demo CLI used to record the Symphony for Trello README walkthrough.
It talks to the Trello API and needs two environment variables:

- `TRELLO_API_KEY`
- `TRELLO_API_TOKEN`

## Usage

```bash
export TRELLO_API_KEY=your-key
export TRELLO_API_TOKEN=your-token
npm run typecheck
npm test
node --import tsx src/cli.ts status
```

`status` checks that the Trello credentials are present before it tries to reach Trello.

## Development

```bash
npm install
npm test
npm run typecheck
```
