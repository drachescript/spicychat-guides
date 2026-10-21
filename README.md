# SpicyChat Guides

Community-maintained guides and reference material for SpicyChat.

**Site:** https://spicychat-guides.drache.uk/

## Main sections
- /start/ — guided learning path from idea to tested, published character
- /troubleshooting/ — problem-first searchable help hub linking to existing guides

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

- `/tags.json` — **90 chatbot-tag names**, taken from the fully expanded Chatbot creation tag picker in SpicyChat web v4.7.2, captured October 21, 2026
- `/lorebook-tags.json` — **227 Lorebook-tag names**, captured from editor v4.5.2 on October 6, 2026; not verified against the current picker
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


## Rulebooks Discord source update (October 15, 2026)

- Primary supplied source: `feedback_rulebooks` Discord channel export, two JSON pages, **1,683 unique messages** from October 6–15, 2026.
- Community source URL: https://discord.com/channels/1108377954389594236/1557097057787846726
- Both `/rulebook/basics/` and `/rulebook/templates/` now link the original discussion, the October 13 shipped release, and the planned v4.7.0 announcement.
- Both Rulebook Original tabs link directly to the Discord discussion at https://discord.com/channels/1108377954389594236/1557097057787846726; they deliberately do **not** import or host the full feedback transcript.
- The provided channel export was used for researching the cleaned-up guides, not for republication. Do not upload `rulebooks-feedback.json` to this site.
- The October 13 release notes confirm Unlisted visibility, remove/switch behavior, meter triggers, quarter-minute Story Clock steps, and **800-character descriptions**, whereas the official documentation currently says 300 for description length and its FAQ still contradicts the shipped Rulebook switching feature.
- The October 13 v4.7.0 roadmap describes features planned for the following week, **not already released**. Don't convert those proposals into current instructions until deployment is verified.
- The separate `announcements`, `concept_immersive_mode` and `feedback_gallery` exports were only briefly reviewed; do not treat the immersive-mode concept as a shipped feature.


## Attachment-enabled Rulebook export review (October 15, 2026)

- Latest HTML export: two `feedback_rulebooks` pages with **1,685 distinct exported message IDs**, spanning October 6–15. This is separate from the previous two-page JSON snapshot that counted 1,683; the two snapshots should not be treated as byte-identical.
- The HTML presents **196 attachment links**: 191 local files, including screenshots and two text reports, plus five videos left as external Discord CDN links. Links with expiring CDN tokens may not remain accessible.
- Attached reports used to refine human guides: `Rulebooks_Beta_Test_Report.txt` (chongoos, v4.5.6, Oct 9) and `message.txt` (torinthiakyna, Persona Accessibility Familiarity, Oct 7).
- The screenshots verify that certain UI states and bugs were observed, not that every issue remains unfixed in later releases. The October 14 tag/filter redesign and creator-debug comments are **planned**, not shipped in this captured period.
- `/rulebook/basics/` and `/rulebook/templates/` now discuss these findings with attributed direct-message links. Both Original tabs remain **Discord links only**; do not commit the channel transcript, screenshots, or attachment bundle to the public guide site.
- Extra supplied channels: public/group Lorebooks, Story Mode, beta tester help, and broad chat. They were skimmed for cross-system issues and have not been republished.

## Official documentation refresh (October 19, 2026)

Official source index: https://docs.spicychat.ai/llms.txt

**Rulebooks:** official docs now contain 11 subguides. Reviewed the overview, first-build walkthrough, in-chat use, meters, meter movement, influence rules, playtest, JSON/AI import and troubleshooting/limits. Three listed subpages (visibility/version details, examples to clone, common recipes) were linked from the docs index but unavailable to our retrieval at review time; do not claim their full text was verified.

Documented changes reflected in our WIP guides:
- 10 total meters, **8 visible** (+N more after first 4); new Pick one and Collection.
- event-based/periodic Dice, scheduled timing, persistent or time-limited outcomes, and meter-conditioned triggers.
- highest-priority AI rule wins among matches on each meter (the old “largest impact” claim is historical).
- Only when, Set to, keyword and trigger behavior, Number “Detect from messages”, and 60 AI questions per turn.
- creator-enabled manual adjustments of eligible Shown values; Private edits apply from the next message; Public/Unlisted after review.
- JSON import up to 2 MB, AI Skill generation workflow, starter templates, cloning, Playtest traces and current limits (2–6 tags for Public/Unlisted, including a Focus tag).
- the October 13 roadmap remains quoted only as dated history, rather than presenting its now-documented features as unavailable.

**Lorebooks:** current official guide confirms Public/Private, public profile/discovery/favorites, JSON import, 5,000 entries and 2,000 characters per entry, and one attached Lorebook per character.

**Other reviewed docs:** Group Chat (2–10 bots, context behavior), Semantic Memory 2.0 / Memory Manager, Search Command and Director Mode; these now have source-linked clarifications in the appropriate human guide.

Original source policy remains unchanged: Rulebooks' Original tabs link to Discord and official docs; no channel transcript is hosted. Hunter's original files remain byte-unchanged. Every edited human guide stays publicly visible as WIP. This comparison checked published documentation, not authenticated in-app operation on every browser/app version.

## Test Your Bot guide

The dedicated `/bots/test-your-bot/` WIP guide contains a five-pass pre-publication test workflow covering opening behavior, unexpected routes, longer-chat consistency, relevant optional systems, regressions and a simple release scorecard. It is intentionally free of fictional examples and sample dialogue. The existing `/bots/testing-feedback/` guide remains focused on interpreting problems and collecting diagnostic feedback; both are linked from Bot Creation. The Original tab uses direct Discord discussion and official documentation links rather than mirroring the channel export.

## Guide navigation and local test checklist

The `/start/` learning path offers seven linked steps and optional branches for AnyPOV, compact personalities, Lorebooks, Rulebooks, multiple characters and memory. `/troubleshooting/` groups 19 reported problem types into three areas and filters locally in the browser. Both route visitors to existing human guides, rather than duplicating those guides.

Individual guide pages have links to these hubs, related-reading suggestions, attributed source categories and review metadata when the review date is known. `lastReviewed` is a **content review date**, not proof of live platform testing; `officialChecked` records a separately confirmed documentation cross-check. A missing date is displayed as not recorded rather than invented.

The `/bots/test-your-bot/` page provides an optional interactive ten-area scorecard using `assets/bot-checklist.js`. Its status choices are **Not tested**, **Pass**, **Needs work**, and **N/A**. Selections stay in the visitor's browser using localStorage, can be reset, and can be exported as a text file. The feature does not upload private conversations or the checklist statuses to a server.

To reduce overlap, `/bots/testing-feedback/` concentrates on interpreting and reporting problems while `/bots/test-your-bot/` owns the testing procedure. The character-field guide now links to the specialized Greeting and Example Dialogue pages rather than restating their full walkthroughs. Existing Discord Original links and all original Hunter documents remain unchanged.

All human guides remain WIP and publicly browseable.

### Tag reference verification (October 21, 2026)

- The chatbot list was compared **name for name and in order** with an owner-provided saved `https://spicychat.ai/chatbot/create` HTML page, with the **All tags** picker fully expanded. The source reported **web version 4.7.2**.
- **90 names** appeared in the picker. The previous October 7 JSON contained **91**. The only difference was **`Step-Family`**, absent from the new capture; there were **no added tags**. `tags.json` was updated to exactly match the 90 captured names and now records source/version/date metadata.
- **`NSFW` and `Low Quality` both visibly appeared as button options inside the creator's tag picker.** The saved HTML verifies that they were displayed; it does not itself prove any specific tag's successful submission or how moderation treats it.
- The editor displays **0/12**, consistent with the official [character-tag guide](https://docs.spicychat.ai/product-guides/creating-chatbots/tags), which requires at least two tags on public characters.
- The Lorebook picker was not part of this capture. `lorebook-tags.json` stays at **227 names from v4.5.2 (October 6)** until a separate Lorebook editor capture can be compared.
- Editor captures reflect the available options at that version and time; future deployments or account-specific conditions may differ. Do not publish the full saved HTML because it contains personal interface and extension state.
