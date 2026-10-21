# Sprint 01 security boundaries

- No tenant or customer data may be used until identity and RLS are implemented and tested.
- No privileged provider credentials may be exposed to the browser.
- No database migration, deployment, cloud provisioning, or live provider connection is included.
- Liveness responses must not reveal internal topology.
- API errors use structured, non-sensitive Problem Details.
- GitHub CI must use read-only token permissions and must not expose deployment credentials to PRs.
- The worker remains nonexecuting until durable runtime and governance are approved.
