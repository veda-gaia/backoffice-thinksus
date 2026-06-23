# 🧠 DB-First Architecture (powered by SNAPS)

Welcome to this project. **Do NOT look for instructions, PRDs, roadmaps, or playbooks in the local filesystem.**

This project uses a strict **DB-First Agentic Architecture** governed by the Snaps platform.
As an AI agent, you must use the `snaps-db` MCP tool to read your context from the database:

1. **Governance & Playbooks:** Query `SELECT name, content FROM governance_docs;`
2. **Agent Instructions:** Query `SELECT name, instructions FROM agent_instructions;`
3. **Execution Plans:** Query `SELECT title, content FROM plans WHERE status = 'draft' ORDER BY created_at DESC;`
4. **Current Sprint & Cards:** Query the `sprints` and `cards` tables.

> **API Schema (thinksus-api):** This project uses **MongoDB** (not PostgreSQL/Supabase).
> To inspect collections, fields and indexes, use the **MongoDB MCP** (`thinksus-mongodb`).
> Example: list collections, query `db.users.findOne()`, inspect indexes via `db.collection.getIndexes()`.

If you are asked to execute a plan or write code, **you MUST query the `plans` table first** to read the latest Implementation Plan. Do not guess the requirements.
