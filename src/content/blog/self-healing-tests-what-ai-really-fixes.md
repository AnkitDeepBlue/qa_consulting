---
title: "Self-Healing Tests: What AI Really Fixes (and What It Doesn't)"
description: "Self-healing automation can cut regression maintenance dramatically, but only if you understand which failures it should heal and which it must never hide."
pubDate: 2026-10-01
tags: ["AI in Testing", "Self-Healing", "Test Automation"]
---

"Self-healing tests" is one of the most hyped phrases in testing right now. Having built agentic self-healing into CI/CD pipelines, and having published an open-source framework that does it, here is my honest take.

## What self-healing is good at

Most UI test failures in a mature suite are not bugs. They are **locator drift**: a renamed CSS class, a restructured component, a button that moved. A healer that re-scans the live DOM, finds the element that best matches the original intent and proposes an updated locator removes a huge amount of maintenance work.

In my projects this contributed to cutting regression cycle time by around 80%.

## What it must never do

A healer must never turn a **real failure into a pass**. If the "Pay" button disappeared, that is a bug, not a locator problem. Good self-healing:

- **Verifies every heal** against the live page before accepting it
- **Logs every change** so a human can review it
- **Separates healing from asserting**: it may fix *how* an element is found, never *what* the test expects

## A practical setup

1. Keep a clean Page Object Model so locators live in one place.
2. Run the healer only on locator-not-found and stale-element failures.
3. Have the healer open a pull request with the proposed fix instead of silently patching code.
4. Track heal frequency per page. A page that heals every week is telling you something about UI stability.

## The bottom line

AI makes good automation cheaper to maintain. It does not make bad automation good. Invest in strategy and framework design first, then let AI handle the repetitive maintenance.

*I built [selenium-python-ai-agent](https://pypi.org/project/selenium-python-ai-agent/) around these principles. It plans, generates and self-heals Selenium Python tests with verification built in.*
