# AI Policy

AI permission levels:

1. `SUGGEST_ONLY`: AI drafts or recommends only.
2. `NEEDS_CONFIRMATION`: AI must show confirmation modal before execution.
3. `AUTO_WITHIN_LIMITS`: AI can execute safe non-sensitive tasks within policy.

Sensitive actions:

- Modify booking
- Extend contract
- Apply discount
- Send financial claim
- Close contract
- Change vehicle status
- Refund deposit

All AI tool calls must write `ai_tool_calls` and `audit_logs`.
