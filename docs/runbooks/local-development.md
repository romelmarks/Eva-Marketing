# Local development (Sprint 01)

## Prerequisites
- Node.js 24
- pnpm 10

## Commands
- `pnpm install` (bootstrap currently has no committed lockfile; do not use for production)
- `pnpm dev`
- `pnpm typecheck`
- `pnpm build`
- `pnpm test`

## Applications
- Web: Next.js development server, normally port 3000.
- API: Hono Node development server, normally port 3001.
- Worker: scaffold only; no process or job execution.

## Limitations
- Dependency versions and installation have not yet been verified in CI.
- Do not use real customer data or production secrets.
- Do not deploy this foundation.
- The root lint task is not yet wired to actual ESLint configuration.
- Generate and review a pnpm lockfile before treating builds as reproducible.
