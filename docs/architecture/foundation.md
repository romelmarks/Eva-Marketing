# Sprint 01 foundation

EVA Marketing is a TypeScript modular monolith. Web, API and worker runtimes are separated. PostgreSQL is the planned transactional source of truth, with application authorization and reviewed RLS in later sprints.

## Safety boundary

No live customer data, paid provider calls, production credentials, cloud provisioning or database migrations are included in Sprint 01.

## Proposed applications

- `apps/web`: Next.js customer, agency and client interfaces.
- `apps/api`: Hono REST API and validation.
- `apps/worker`: future durable background work, not yet enabled.

All future domain packages must expose public interfaces and must not bypass tenant authorization.
