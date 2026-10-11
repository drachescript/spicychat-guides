# SpicyChat Reference

Updated: October 3, 2026 (America/New_York)

## Purpose and scope

A concise working companion to the SpicyChat website database and DMP crafting guides. Use it for useful community advice, dated observations, documentation conflicts, and practical interpretation. Use the website database for detailed official documentation and the current crafting guides for how we build bots.

This edition consolidates selected material from the existing System Reference and the Discord posts supplied by the creator. It is a light consolidation, not a fresh platform audit. Discord statements are attributed reports, not automatically verified platform facts. Detailed Lorebook guidance remains in the existing Lorebook guide.

## Source handling

- For actual platform behavior, prefer recent directly verified behavior, with the model, interface, and conditions recorded. An observation about one model does not establish a universal rule.
- For official policy and intended feature behavior, consult current official documentation and identifiable staff announcements. A user's successful test does not establish what platform policy permits.
- Record Discord author, displayed date, message link when available, and whether the post is an official announcement, staff clarification, community advice, or creator observation. A display name containing “Dev” or “Support” alone does not verify staff status.
- Distinguish an announced rollout from a feature confirmed available to the creator. Preserve unresolved conflicts instead of silently choosing a convenient answer.
- The website database has a capture date; the reference has an update date. Neither date proves every underlying claim was checked then.
- Project preferences govern our creative workflow. Community suggestions do not silently replace them.

## 1. Keep character behavior separate from the opening story

**Source:** supplied “Separate the Behavioral Engine From the Story” post; author/date not supplied. **Status:** community design advice.

Keep persistent character information focused on personality, motives, fears, contradictions, speech, relationships, boundaries, and any character-specific mechanics. Put the opening circumstances and immediate conflict in Scenario and Greeting. A change of setting need not require rebuilding the character.

Useful trimming question: “If I delete this sentence, what meaningful behavior, identity, continuity, or world fact is lost?” Remove repetition and decorative facts that do not serve the experience. Retain identity and relevant background even when their effect is not immediately visible in dialogue.

Character consistency matters more than accumulating facts. Give the model enough information to portray someone distinctly, then let conversation develop the story. These are authoring principles, not separate executable engines inside SpicyChat.

## 2. Field responsibilities

**Source:** existing System Reference v5, dated September 28, 2026; supported in broad outline by the supplied community guides. **Status:** carried-forward project interpretation; use current crafting guides for exact placement conventions.

| Area | Working purpose |
|---|---|
| Personality | Persistent character/cast definition; for a world bot, how the world and NPCs are portrayed |
| Scenario | Setting, starting circumstances, and applicable runtime rules according to the current project guide |
| Greeting | First playable scene; demonstrates voice, formatting, pacing, and a useful handoff |
| Example Dialogue | Optional examples of distinctive voice or behavior |
| Lorebook | Relevant expandable world and character information; detailed mechanics live in the Lorebook guide |
| User Persona | The character the user roleplays, with any deliberately chosen user-side preferences |
| Name, Title, Avatar, Tags | Identity and presentation; do not rely on these as the main behavior instructions |
| Model, generation settings, memory tools | Conversation/runtime controls; diagnose them separately from the character definition |

## 3. Definitions, examples, and greetings

**Sources:** Duke and Support Canine V70, community guide, July 2–4, 2024. The supplied guide explicitly describes itself as community-driven, not sponsored by SpicyChat.

- Natural prose and compact labeled sections are both useful options. Choose clarity and editability; do not assume W++, plus signs, brackets, or JSON-looking text have special execution powers.
- Use Just Enough Description: include what makes the character recognizable and playable without stacking near-synonymous adjectives.
- Wording can suggest unintended behavior. Describe the intended meaning concretely when a broad label is ambiguous. The guide's claim that “dominant” always produces one particular portrayal is an observation/generalization, not a universal rule.
- Demonstrate the desired voice through prose and optional dialogue examples. Keep examples focused instead of adding a second biography.
- The greeting should establish something to respond to and demonstrate the intended style. Avoid assuming the user's thoughts, dialogue, or decisions in a greeting that is meant to preserve user agency.
- Separate named cast members clearly. Brackets are one formatting choice, not a mandatory platform requirement. Do not force every character to speak every turn.
- Use accurate tags. Popularity does not justify a misleading category.

The older guide's claims about JSON being unsupported, exact image-training steps, and special delimiter handling are retained only as historical source claims, not current technical specifications. Explicit illustrative roleplay passages are omitted from this summary.

## 4. Personas are on the user side

**Sources:** Amaiar [JRB], June 9, 2026, 9:57–10:06 AM; Chaosdick, February 25, 2026, 10:30 PM; Duke, July 2, 2024. Times are copied as displayed; timezone was not supplied. **Status:** community advice.

The Persona describes who the user is roleplaying. The contributors also report using it to request narration style, pacing, genre, and user-agency behavior.

A compact optional arrangement:

```text
ROLEPLAY PREFERENCES
The user controls their character's actions, dialogue, thoughts, and choices.
Portray the other characters and environment within the bot's intended scope.
Base character reactions on information available to them.
Style: [desired style]
Pacing: [desired pacing]

USER CHARACTER
Name:
Adult age:
Pronouns:
Appearance:
Distinctive traits:
Relevant skills/background:
Established relationship, if applicable:
```

This is an optional user-side template, not a new universal bot rule. For world or ensemble bots, “portray only one character” may wrongly suppress NPCs. Match the preference to the bot's scope.

Choose precise traits rather than lists such as smart/intelligent/clever/astute. Explain a distinction when it matters: quick decisions, technical expertise, strong recall, or creative problem-solving are different qualities.

Reported troubleshooting ideas include testing a changed Persona in a fresh conversation and using supported runtime steering when appropriate. Claims that top placement guarantees priority, positive phrasing always beats negatives, a temperature threshold guarantees compliance, or a model always follows instructions better are not established here.

Treat “testing personas” as requests for explanations, not proof that the model can reveal its actual configuration accurately. The supplied guide's `/search` suggestion is unverified as a native platform command. Canon requests also do not establish that the model has fetched or checked a source.

## 5. Context and memory

**Source:** supplied “Understanding Context Window vs Total Memory” post; author/date not supplied. It links to an explanatory Towards AI article, which was not independently reviewed for this consolidation. **Status:** community explanation, simplified.

The useful distinction is between information present in the model's current input and information stored elsewhere that the application may later retrieve or summarize. Do not treat context capacity, stored chat history, memory features, and response length as interchangeable.

The post's scrolling-whiteboard analogy is useful, but “erased details cease to exist” should be read as “details may no longer be in the current model input,” not proof that stored chat history was deleted. Exact selection, summarization, and retrieval behavior must come from current documentation or testing.

Compact continuity notes can help preserve important facts when a supported memory feature includes them. Summaries can also omit or distort information. Record established relationships, major events, unresolved commitments, and current state; update them when the story changes.

The reported “lost in the middle” effect should not be treated as a guarantee that every model ignores the middle. Presence in context does not itself guarantee correct use of a detail.

## 6. RPG and world bots

**Source:** dragongraf1312 QoL Dev and Bots, September 7, 2026, 4:27–4:34 PM, answering Cult Daddy [RSME]. **Status:** community advice; staff affiliation not verified.

Use a GM/world role when the intended experience includes settings, NPCs, enemies, factions, exploration, and quests rather than one central character.

- The user controls their character. The bot portrays the surrounding world and relevant NPCs.
- Give NPCs distinct motives, knowledge, relationships, and voices.
- Carry consequences forward and keep unresolved events available when relevant.
- Allow exploration, negotiation, refusal, changed allegiances, unexpected plans, success, and failure.
- Introduce opportunities through circumstances and consequences rather than forcing a predetermined outcome.
- End at a natural handoff so the user can act.

Optional quest notes can use **Trigger → Progression → Completion**, with alternate outcomes where useful. They guide portrayal; they do not create a deterministic game engine. Distinguish a player's attempted action from an established outcome according to the agreed RPG rules.

Keep the permanent instructions focused on running the experience. Use the existing Lorebook guide for world-information organization and retrieval details.

## 7. Markdown, commands, and state trackers

**Source:** Bluhdwulf, “The SpicyChat Creator's Guide: Visual Markdown & Hidden HUDs,” September 4, 2026, 12:43–12:44 AM. **Status:** community-reported interface behavior and experimental technique.

The post reports yellow styling for inline backticks, heading effects from an underline, italic terminal text, and HTML comments hidden in the displayed chat. These are renderer-dependent observations, not confirmed guarantees for every client or theme. The pasted text contains escaping and broken citation markers; those are copying artifacts, not required syntax.

Commands such as `/menu`, `/status`, and `/help` can be defined as roleplay conventions. Do not describe them as native application features merely because they begin with a slash.

The suggested tracker repeats compact state in each reply, for example:

```text
<!-- [STATE: LOC:Town | HP:100 | GOLD:50 | GEAR:IronSword] -->
```

The author recommends demonstrating the starting tag in the Greeting, keeping it short and on one line, and testing voice playback. Reported TTS reading of hidden comments and exact rendering behavior remain unverified here.

Treat this as an experimental continuity aid. It is not a permanent save file, secure storage, or a guarantee of zero memory loss. A generated tracker can omit information, copy an error, or update a value incorrectly. Hidden-looking text is not necessarily excluded from context or output budgets.

Only use a tracker when state matters to the experience. Test whether it stays available, renders as intended, and updates correctly. A visible tracker may be easier to inspect. The post's fixed 180–300-token claims should not be treated as current universal output limits.

## 8. Moderation observations

**Source:** supplied “blocked words” post; author/date not supplied; the referenced Discord thread link was not recoverable. **Status:** unverified community claim.

The post groups alleged triggers under underage, incest, bestiality, abuse, and other categories. It also claims substring matches, SFW switching until words leave memory, and particular reasons images are blocked.

Do not use this as an official banned-word list or assume an ordinary word reliably triggers a specific classifier. The supplied post provides no controlled tests, model/version scope, or staff confirmation establishing those claims. Nor does it establish that visible content remains solely because nobody reported it.

For legitimate troubleshooting, record the exact message or image, displayed rejection, date, and relevant model/settings. Distinguish image moderation from conversation behavior and from platform policy. Preserve clear adult identities and accurate context; do not distort character descriptions based on an unsupported word blacklist.

## 9. Image generation: dated community findings

**Sources:** Duke, July 3, 2024; JURAI's V2 forum guide and replies, February 23–27, 2025, with a listed guide update through August 30, 2025; thatfabchick and tilevik replies. **Status:** historical community guidance, primarily V2-specific.

Useful practices from these posts:

- Keep a small archive of successful prompts and the generator/settings used.
- Use a dedicated test bot when comparing the effects of the avatar, Greeting, and character description.
- Describe subject, appearance, clothing, pose, framing, and setting clearly.
- Start with a simple prompt and change one relevant feature when evaluating a result.
- Contributors report difficulty keeping attributes attached to the right person in multi-person images, including skin-color mixups.
- JURAI reports that higher reference/LoRA influence could reduce flexibility in V2. Treat this as a version-specific observation.

The supplied V2 attachment contains a forum index, update log, and selected replies, not all the linked guides. It mentions a separate V3 Qwen forum; it does not supply a V3 guide. Do not extrapolate its subscription access, training behavior, weighting syntax, or bug reports to the current generator without checking.

The old “150 training steps per bot” statement, universal prompt-weight ceilings, mode-switch workarounds, and reported backend explanations are not adopted as current facts.

## 10. Findings carried forward from the old reference

**Source:** SpicyChat LLM System Reference v5, September 28, 2026. **Status:** previously recorded project findings; not retested in this edition.

- The old reference records a 2,000-character Lorebook entry limit observed in the editor, conflicting with older documentation stating 1,000. Consult the current Lorebook guide and editor when a precise limit matters.
- It records model/context and access discrepancies between older documentation and the supplied live selector. Use current model-specific information rather than deriving context solely from a subscription tier.
- Model lists, prices, subscription benefits, tags, image options, and output limits are volatile. Their old tables are not reproduced as current specifications.
- Written review of a definition is different from observing actual SpicyChat runtime behavior. Do not claim a bot has been behaviorally tested from a text audit alone.

## Maintaining this reference

Add only information that changes a practical decision. Use this short entry format:

```text
Topic:
Finding or advice:
Source / author / date / link:
Status: official / staff clarification / community advice / creator-tested / unverified
Scope: model, client, version, or conditions when known
Conflict or limitation:
Last checked:
```

Keep detailed official material in the website database and detailed creative methods in their crafting guides. Mark superseded claims rather than merging incompatible versions. Discord advice is optional evidence and inspiration, not automatic policy or a mandatory building rule.

Official source entry points for future checks:

- https://support.spicychat.ai/support/solutions
- https://docs.spicychat.ai/

No new official website audit was performed for this edition. Original reference files remain available; this concise companion is not a claim that every unique detail in those files has been migrated.
