---
sidebar_position: 5
sidebar_label: '🗳️ Vote'
---

# Vote

The most popular platform for conducting voting at the moment is [Snapshot](https://snapshot.org), a signature based voting system that allows for verifiable, token-weighted, gasless voting. Nance integrates with Snapshot through their API for both proposal upload and voting from the Nance platform.

Proposals that pass Temperature Check will automatically be sent to your organization's Snapshot for voting, no more delays in getting your proposals in front of your members! No more copy pasting proposal content!

At the beginning of the _Vote_ period, Nance will send another rollup message to the discussion platform with a list of all of the proposals that are up for vote and the time that the Vote period will end.

![Nance vote rollup](/img/vote-rollup.png)

---

Many organizations require a minimum number of members to participate in a vote in order for it to be valid, also known as a [quorum](https://en.wikipedia.org/wiki/Quorum). Near the end of a Vote period, Nance will check to see which proposals are under the configurable quorum and send a reminder message to the discussion platform, alerting members that their vote is needed.

![Nance quorum alert](/img/quorum-alert.png)

---

Once the Vote period has ended, Nance will send another rollup message summarizing the vote results of the Governance Cycle. Nance allows you to configure complex proposal passing requirements such as a [Supermajority](https://en.wikipedia.org/wiki/Supermajority), [Unanimity](https://en.wikipedia.org/wiki/Unanimity), or other thresholds. Proposals that pass these requirements will be given a status of _Approved_ while those that do not will be given a status of _Cancelled_.

![Nance vote results](/img/voteResults-rollup.png)

---

Proposals that are _Approved_ are now ready to [Execute](/docs/basics/execute.md).
