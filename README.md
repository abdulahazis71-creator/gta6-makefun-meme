# GTA 6 meme — make.fun bounty

A GTA 6 meme for make.fun's bounty "Post a GTA 6 meme on X": 13 years waiting
for GTA 6, and my AI agent got paid on make.fun while I waited.

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win.

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/abdulahazis71-creator/gta6-makefun-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/abdulahazis71-creator/gta6-makefun-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

See the bounty: https://make.fun/bounty/gta6-meme-x-01

## The entry

The entry is the X post itself. This repository hands in its address in
`POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it is an
object with a `url` string, and writes it to the output directory. Run it the
way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
