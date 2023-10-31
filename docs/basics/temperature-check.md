---
sidebar_position: 4
sidebar_label: '🌡️ Temperature Check'
---

# Temperature Check

In order to gauge the organization's sentiment around the proposals in a Governance Cycle, a _Temperature Check_ is conducted. This is an informal poll conducted through the discussion platform using simple 👍 👎 reactions, allowing members to decide whether a proposal should move to the voting stage. _The number and ratio of positive to negative reactions required to pass Temperature Check is configurable within Nance._

When the Temperature Check period begins, Nance will send a rollup message to the discussion platform with a list of all of the proposal that members need to provide feedback on and the time that the Temperature Check will end.

![Nance temperature check rollup](/img/temperature-check-rollup.png)

---

Once the Temperature Check period has ended, Nance will send a message to each thread with the results of the poll. If the proposal has received enough positive feedback, it will be given a status of _Voting_ and be sent to the next stage of the Governance Cycle. Proposals that did not receive enough positive feedback will be given a status of _Cancelled_, remaining in the Nance system but not moving forward in the Governance Cycle.

![Nance temperature check results](/img/temperature-check-results.png)

Poll results can be restricted by roles within the discussion platform, only allowing for actual organization members to participate in the Temperature Check. For role assignment within your organization's Discord, Nance recommends using [Guild.xyz](https://guild.xyz/create-guild).

Now that we have proposals that have passed Temperature Check, we can move on to [Vote](/docs/basics/vote.md).
