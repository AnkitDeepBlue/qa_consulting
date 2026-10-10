---
title: "selenium-python-ai-agent v0.2.0 released on PyPI"
description: "The open-source multi-agent framework that plans, generates and self-heals Selenium Python tests ships a new release with saved test plans and verified heals."
pubDate: 2026-07-12
tags: ["Open Source", "AI in Testing", "Selenium"]
sourceUrl: "https://pypi.org/project/selenium-python-ai-agent/"
sourceName: "PyPI"
---

Version 0.2.0 of **selenium-python-ai-agent**, an open-source framework I created and maintain, is now available on PyPI.

The framework brings a Playwright-style agent workflow to Selenium Python. Three agents work as a pipeline:

- **Planner** explores the application and writes a test plan
- **Generator** turns the plan into maintainable Page Object Model code (pytest or pytest-bdd)
- **Healer** fixes broken locators and verifies every fix against the live DOM

## Why it matters

Teams with large Selenium Python suites get the benefits of AI-assisted test creation and maintenance without migrating to a new tool. Plans are saved as reviewable artifacts, so humans stay in control of what gets tested.

Install it with `pip install selenium-python-ai-agent`.
