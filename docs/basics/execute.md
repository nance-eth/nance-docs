---
sidebar_position: 6
sidebar_label: '✅ Execute'
---

# Execute

Your organization's Safe signers can now queue an on-chain transactions and transfers with actions from _Approved_ proposals. Nance allows you to bundle multiple proposal actions into a single multicall Safe transaction, easing the burden on Safe signers.

![Nance queue transactions](/img/execute-transactions.png)

Nance also supports the enabling of `Refund gas` mode which will automatically reimburse whoever executes the Safe transaction. **No more endless cycles of reimbursing your members!**

---

In addition to token transfers and custom transactions, Nance supports the queuing of a Juicebox project [`reconfigureFundingCyclesOf`](https://docs.juicebox.money/dev/api/contracts/or-controllers/jbcontroller3_1/#reconfigurefundingcyclesof), allowing you to fulfill the request of payouts from your organization's Juicebox project treasury. When queuing, your Safe signers will see a breakdown of the funding cycle configuration changes that will be made.

![Nance queue reconfiguration](/img/execute-reconfig.png)

---

Now that all proposal actions are queued, its time for a period of [Delay](/docs/basics/delay.md) before the next Governance Cycle begins.
