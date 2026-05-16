# Architecture

Dheel Plus Rent OS is implemented as a modular monolith with clear module boundaries:

- Auth & RBAC
- Fleet
- Booking
- Contracts & Inspection
- Payments & Deposits
- Invoices & ZATCA Adapter
- CRM & Conversations
- Notifications
- AI Orchestrator
- Reports
- Integrations
- Audit Logs

The architecture is designed to scale into services later. First extraction candidates: Notifications, Payments, AI, Analytics.
