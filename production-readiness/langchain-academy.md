---
layout: default
title: LangChain Academy
---

# LangChain Academy: LLM Production and Evaluation

**Link:** [https://academy.langchain.com/](https://academy.langchain.com/)

## What Is This?

LangChain Academy provides technical, hands-on labs focused on the LangChain ecosystem. This specific resource focuses on the "Day 2" operations of LLM software: observability and evaluation. It moves from "making the code run" to "making the code reliable and production-ready."

## Content and Scope

The course centers on LangSmith, a platform for tracing and debugging LLM applications. It covers how to monitor the exact prompts and responses in a complex chain, how to calculate the cost and latency of AI calls, and how to build "Evaluation Sets" (Evals) to programmatically test if your AI-powered software is actually performing correctly across hundreds of different inputs.

## Relevance to Your Work

A major challenge for using LLMs is the unpredictable nature of the output. The code might work once and fail the next time. This resource is essential because it teaches how to manage the uncertainty of LLMs. Before shipping any AI-powered feature, you need to know that it works consistently across edge cases—this course shows you how.

## Tips for Effective Use

- **The most effective way to use this is to integrate LangSmith into a project you are already building.**
- **When your code produces a strange or buggy output**, use the "Trace" feature to see exactly which part of the prompt chain failed.
