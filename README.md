# SpicyChat Guides

Community-maintained guides and reference material for SpicyChat.

**Site:** https://spicychat-guides.drache.uk/

## Main sections

- /bots/ — bot creation, writing behavior, creator workflow, systems, images, models/settings and publishing
- /persona/ — Persona basics/formatting and Persona Commands
- /lorebook/ — basics, advanced keyword design, context/tokens and system-heavy uses
- /rulebook/ — meters, influence rules, evaluations, playtesting and Rulebook setup
- /group/ — multi-character bots and Group Chats
- /guides/ — everything in one searchable list
- /llm/ — separate guides written for an assisting LLM
- /reference/ — original Discord source threads and public JSON references

## Current status

All human guides are currently marked **WIP / not complete** so they can be reviewed before being treated as finished. Rulebooks are currently in beta, so that guide also needs checking as the feature evolves.

The human pages are not Discord reposts. Discord-based guides condense/reorganize source discussions, while feature guides can also use official documentation. The original sources stay linked from each guide.

The source exports are not committed to the public repository. Original Discord threads stay linked from the guide metadata/source page.

SpicyChat Guides is an independent community project and is not affiliated with, endorsed by, or sponsored by SpicyChat.

## Public JSON reference files

- `/tags.json` — current chatbot tags
- `/lorebook-tags.json` — current Lorebook tag picker values
- `/blocked-words.json` — community-curated blocked-word/moderation reference

## Hunter's original files (updated October 12, 2026)

- `/llm/hunter/` — current original files, past versions, and one pending Word document.
- `/llm/hunter-files.json` — inventory with download links, versions, sizes and status.
- `/llm/originals/` — 15 original files preserved with their original filenames, plus a manifest.
- Current: Single Character v6, Multi-Character v3, World Bot v2, TTRPG v2, Unified Lorebook v6. Research v1, Tagging v2, Reference v1 and Understanding SpicyChat.AI remain unchanged.
- Previous files remain downloadable, including Unified Lorebook v4 and v5 (neither supersedes v6).
- `Understanding Single-Character Bots.docx` is still pending GitHub upload. It is a separate book, not a replacement for `Understanding SpicyChat.AI.docx`.

Human guides continue to be edited separately from the original LLM files and remain public WIP drafts for review.

## Guide pages: Guide / Original views

Each human-readable guide now has two tabs:

- **Guide** — maintained, rewritten and condensed, with the public **WIP · not complete** label until reviewed.
- **Original** — linked Discord threads, original LLM files, official documentation, and (where imported) the original Discord message texts, authors, dates, and direct message links. These message texts are not paraphrased by the page renderer.

Each transcript loads only when someone opens **Original**, and long threads show messages in batches to avoid mounting hundreds of posts at once. The original Discord capture may be incomplete; the site must not imply that every message in a live thread was exported. Original message data is stored in `/assets/originals/{guide-id}.json`.

The initial source messages for Persona Commands, Lorebook Basics, and Advanced Lorebooks are already committed. Additional full source-export snapshots are prepared as a changed-files ZIP for uploading to the matching folder. No source messages are fabricated for guides that lack imported originals; their source links remain visible.

Hunter's original TXT/MD files remain unmodified in `/llm/originals/` with past versions archived. The separate `Understanding Single-Character Bots.docx` is a pending original upload.

## New WIP guide topics (October 2026)

All of these stay public with WIP · not complete labels, with a cleaned Guide view and an Original tab linking back to their source material.

- `/bots/fields/` — what belongs in each character field
- `/bots/greetings/` — usable opening messages and user agency
- `/bots/anypov/` — inclusive character setups without accidental POV locks
- `/bots/plist-vs-prose/` — compact lists, prose and hybrids
- `/bots/repetitive-responses/` — parroting, looping and generic response diagnosis
- `/rulebook/templates/` — six editor recipes based on official beta docs, **not verified importable JSON**
- `/bots/moderation/` — CalifornianJosh's community moderation guide, with added interpretation and false-positive reporting
- `/bots/example-dialogue/` — secondary guide on speech/behavior demonstration
- `/lorebook/troubleshooting/` — secondary guide diagnosing keywords, retrieval and context issues

Existing `/bots/testing-feedback/` was expanded with a practical test matrix and report template. Existing Rulebook Basics was checked against updated beta documentation and the conflicting guidance around removing/replacing Rulebooks was flagged.

Original Discord threads and Hunter files remain separately linked; draft text must not be presented as unmodified originals.
