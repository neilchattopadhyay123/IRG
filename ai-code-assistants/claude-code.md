---
layout: default
title: Claude Code Docs
---

# Claude Code Docs

**Link:** [https://code.claude.com/docs](https://code.claude.com/docs)

## What Is This?

Claude Code is an agentic tool that lives in your terminal and interacts directly with your local files. You use the documentation to learn how to set up the agent to execute engineering tasks like fixing bugs across several files, running tests, and managing git workflows. It follows a Unix philosophy, so you can pipe it into other CLI tools or use it in CI/CD pipelines.

## Content and Scope

The documentation explains how to create a **CLAUDE.md** file, which acts as a project-specific instruction set. By adding this file to your root directory, you can define your architecture rules, coding standards, and build commands so the AI follows them every time you start a session. It also covers features like **Ultraplan** for drafting complex plans and **Routines** for scheduling recurring tasks.

## Relevance to Your Work

This resource is for developers who want to move beyond chat interfaces to terminal-based automation. It provides the technical steps to let an AI read, write, and execute commands in your actual development environment. From refactoring entire modules to running your test suite and committing to version control, Claude Code can handle it all from a single prompt.

## Tips for Effective Use

- **Setup your CLAUDE.md file early** with your specific build and test commands so the agent doesn't have to guess how to run your project.
- **Use the /ultraplan command** for large features to get a plan you can review in the browser before the AI starts making changes.
- **Look at the Model Context Protocol (MCP) section** to learn how to connect the agent to external data like Jira or Google Drive.
