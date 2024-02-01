---
sidebar_position: 3
sidebar_label: '🫰 Snapshot'
---

# Snapshot

## Auto Setup
Nance can publish proposals to your Snapshot space. The easiest way to set this up is during space creation:

![Snapshot space creation](/img/connect-snapshot.png)

Search for your Snapshot space and click `Add Nance as author`. Note: you must be the owner or moderator of the Snapshot space
to add Nance as an author.

This will prompt you to sign a transaction that modifies your space settings, adding Nance as an author and sending
the changes to the Snapshot API.

The address that Nance uses to author posts is `0x50e70c43a5dd812e2309eacea61348041011b4ba` aka `gnance.eth`

---
## Manual Setup
If you need to add Nance as an author manually follow these steps:

1. Go to your space settings
![](/img/snapshot-main.png)

2. Go to the `Members` tab
![](/img/snapshot-members.png)

3. Add the Nance address as an author: `0x50e70c43a5dd812e2309eacea61348041011b4ba`
![](/img/snapshot-author.png)

Proposals uploaded by Nance will look like this:
![](/img/snapshot-proposal.png)
