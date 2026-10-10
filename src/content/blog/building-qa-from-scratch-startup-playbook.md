---
title: "Building QA from Scratch: A Startup Playbook"
description: "The first 90 days of setting up a quality function when your startup has none: what to do first, what to skip, and how to avoid automating chaos."
pubDate: 2026-10-08
tags: ["QA Strategy", "Startups", "Test Process"]
---

Most startups don't skip QA because they don't care about quality. They skip it because nobody has had time to decide what "quality" means for their product. Then a bad release hits a key customer and suddenly everyone wants "automation" by next sprint.

Here is the playbook I use when a team asks me to build QA from zero.

## Days 1–30: Understand before you test

**Map the risk, not the features.** List the flows that would hurt most if they broke: signup, payments, data export, whatever keeps customers paying. That list is your first test scope.

**Agree on a Definition of Done.** One page. What must be true before a story is "done"? Reviewed, tested on staging, acceptance criteria verified. Keep it short enough that people actually follow it.

**Fix the bug lifecycle.** Severity, priority, who triages and when. A clear bug process alone often improves perceived quality within weeks.

## Days 31–60: Make testing repeatable

**Write lean test cases for the critical paths.** Not hundreds of them. Twenty well-written scenarios for your riskiest flows beat a 500-row spreadsheet nobody maintains.

**Pick a tooling stack that fits the team.** If your engineers write Python, a Pytest + Playwright stack will get adopted. If they write TypeScript, use Playwright Test. The best framework is the one your developers will contribute to.

**Start API tests before UI tests.** They are faster, more stable and catch the majority of logic bugs. UI automation comes next, and only for the critical journeys.

## Days 61–90: Automate and gate

**Wire tests into CI.** A smoke suite on every pull request, a fuller regression nightly. Failing tests must block merges, or they will be ignored.

**Measure a few things that matter:** escaped defects, time to detect, and flaky-test rate. Skip vanity metrics like raw test-case counts.

**Plan the next hire.** By now you will know whether you need a manual explorer, an SDET, or both.

## The mistake to avoid

Don't automate chaos. If your process is unclear, automation just produces unclear results faster. Process first, then automation, then AI-assisted automation on top.

---

*Setting up QA for your product? [Book a free discovery call](/contact) and we'll map your first 90 days together.*
