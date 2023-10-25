---
sidebar_position: 2
sidebar_label: '📜 Propose'
---

# Propose

Organization members have a lots of ideas. In order to actualize them they must first formalize their idea into a _proposal_.

Nance provides a text editor for creating and editing proposals. The editor supports ctrl-v IPFS image uploads, a GUI for table creation, drag and drop file content extraction, and rich text styling all while still supporting full markdown output for portability across platforms. No need for proposal authors to be markdown experts, let them focus on the content.

![/img/editor.png](/img/editor.png)

When making a proposal, authors can attach _actions_ that will be executed shall the proposal pass. Nance currently supports the following actions:
1. Payout from a Juicebox project's treasury
2. Edit a Juicebox project's [reserve token](https://docs.juicebox.money/dev/learn/glossary/reserved-tokens/) distribution list
3. Token transfer from organization's Safe (ETH, USDC, JBX)
4. Custom transaction (allows for interaction with any Ethereum contract, Etherscan like interface)

---

Nance allows authors to save proposals as a _Draft_ (public on the platform) or _Private Draft_ (only they can see) if their ideas are not fully refined yet. Once they are ready to formally submit their proposal, they simply click _Publish_ and the the proposal will be given a _Discussion_ status. Now other organization members can [Discuss](/docs/basics/discuss).
