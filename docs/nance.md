---
sidebar_position: 3
sidebar_label: '⇌ Nance'
---

# What is Nance?

Nance is a governance automation platform. With the multifaceted nature of governance, organizations can
quickly become overwhelmed with the number of platforms and tools required to manage their governance.

Nance solves this problem by creating a systematic, repeatable, and timely approach to an organization's governance process.

Nance integrates with the tools DAOs are already using such as [Discord](/docs/integrations/discord.md), [Snapshot](/docs/integrations/snapshot.md), [Safe](/docs/integrations/safe.md), and [Juicebox](/docs/integrations/juicebox.md) Nance provides a streamlined governance experience for your community.

No more copy-pasting proposal content between platforms! No more asking for wallet addresses! No more manually executing proposals!

## Components

Nance is made up of the following components:
1. **Proposal content editor**
    * web-based editor for creating and editing proposals
    * pure markdown output for portability across platforms, no more Google Docs
    * IPFS integration for storing images
2. **Proposal storage system**
    * built on [Dolt](https://docs.dolthub.com/introduction/what-is-dolt), a version controlled MySQL database
    * full access to your own database, no CSV exports or vendor lock-in
    * proposal content search capabilities
    * IPFS data backups
3. **Discord bot**
    * keeps your organization up to date with the latest proposals
    * coordinates discussions for each proposal
    * alerts members when they need to participate
    * provides vote outcome notifications
4. **Schedule automations**
    * sends proposals where they need to go, when they need to go
    * integrates with Discord bot to send alerts
    * integrates with dolt for database upkeep
5. **Proposal executor**
    * compiles all passing proposal actions into a single transaction
    * integrates with [Safe](https://safe.global) and [Juicebox](https://juicebox.money) to execute proposals
    * builds complex transactions such as Juicebox project [`reconfigureFundingCyclesOf`](https://docs.juicebox.money/dev/api/contracts/or-controllers/jbcontroller3_1/#reconfigurefundingcyclesof)
    * _[reach out to us](https://nance.app/contact) if you need a custom transaction type for your organization_

**With these core components, Nance can automate your organization's governance process from start to finish so you focus on higher level tasks.**

Next we'll dig into a key concept known as the [Governance Cycle](/docs/basics/governance-cycle.md).
