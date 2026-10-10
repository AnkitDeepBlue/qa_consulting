---
title: "Playwright introduces built-in test agents: planner, generator and healer"
description: "Playwright now ships AI test agents that explore an app, write tests and repair failing ones, a sign of where test automation is heading."
pubDate: 2025-10-15
tags: ["Playwright", "AI in Testing", "Industry"]
sourceUrl: "https://playwright.dev/docs/test-agents"
sourceName: "Playwright docs"
---

Playwright added **test agents**, a set of AI agent definitions that work with LLM-powered coding tools:

- **Planner** explores the app and produces a Markdown test plan
- **Generator** converts the plan into Playwright tests
- **Healer** runs the suite and automatically repairs failing tests

## My take

This is a strong signal that agentic workflows are moving from experiments into mainstream testing tools. The pattern (plan, generate, heal, with a human reviewing the plan) is the right one. It keeps test intent explicit while letting AI handle the repetitive work.

For teams, the takeaway is not "replace your QA engineers". It is: **invest in clear test strategy and clean framework design**, because AI agents amplify whatever foundation they are given.
