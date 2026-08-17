# Learn Playwright Batch 2X 📚

A comprehensive JavaScript learning resource containing practice files, code examples, and learning notes organized by topic. This repository is designed for beginners to master core JavaScript concepts and prepare for Playwright automation testing.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running JavaScript Examples](#running-javascript-examples)
- [Learning Path](#learning-path)
- [Tips for Learning](#tips-for-learning)
- [Troubleshooting](#troubleshooting)

## Project Structure

### Fundamentals
- [chapter_01_Basics](chapter_01_Basics/README.md): Basic JavaScript syntax, setup verification, and your first scripts
- [chapter_02_Javascript_Concept](chapter_02_Javascript_Concept/README.md): Core JavaScript fundamentals and language features
- [chapter_03_Identifier_Literals](chapter_03_Identifier_Literals/README.md): Identifiers naming rules, comments, and literals

### Variables & Functions
- [chapter_04_Javascript_Concepts](chapter_04_Javascript_Concepts/README.md): var, let, const declarations; function declaration and invocation; scope and hoisting behavior
- [chapter_05_Literal](chapter_05_Literal/README.md): Template literals, string/number formatting, null vs undefined, data types

### Operators & Control Flow
- [chapter_06_Operator](chapter_06_Operator/README.md): Arithmetic, comparison, logical, ternary, typeof, and increment/decrement operators
- [chapter_07_If_else](chapter_07_If_else/README.md): Conditional statements, decision-making patterns, real-world examples
- [chapter_08_Switch_Statement](chapter_08_Switch_Statement/README.md): Switch-case logic, default cases, grouping conditions

### Input & Loops
- [chapter_09_UserInput](chapter_09_UserInput/README.md): Reading user input in Node.js, readline module, prompt-sync library
- [chapter_10_Loops](chapter_10_Loops/README.md): For, while, do-while loops; for-in, for-of, forEach; break and continue statements

## Prerequisites

Before you start, ensure you have:

- **Node.js** (v14 or higher) installed on your machine ([Download](https://nodejs.org/))
- A code editor (VS Code recommended)
- Basic command-line/terminal knowledge
- Optional: Playwright installed with `npm install -g playwright`

## Getting Started

1. Clone or download this repository
2. Open the project folder in your code editor
3. Navigate to your desired chapter folder
4. Read the chapter's README.md for context
5. Start with the numbered files in sequence (01, 02, 03, etc.)

## Running JavaScript Examples

Run any JavaScript file directly with Node.js:

```bash
# Navigate to a chapter
cd chapter_04_Javascript_Concepts

# Run a specific example
node 09_var_let_const.js
```

Or run from the root directory:

```bash
node chapter_04_Javascript_Concepts/09_var_let_const.js
```

## Learning Path

**Recommended learning sequence:**
1. Start with **Chapter 1-3** to understand basics and syntax rules
2. Move to **Chapter 4** to master variable declarations and scope
3. Learn **Chapter 5** for data types and literals
4. Study **Chapter 6** to understand all operators
5. Practice **Chapter 7-8** for control flow and decision-making
6. Complete **Chapter 9** to handle user interactions
7. Master **Chapter 10** for loops and iteration

## Tips for Learning

- **Run every example**: Don't just read the code; execute it and see the output
- **Modify and experiment**: Change values, add console.logs, test edge cases
- **Understand before moving on**: Each concept builds on previous knowledge
- **Check interview questions**: Files labeled "IQ" contain common interview scenarios
- **Read each chapter's README**: They contain additional context and learning objectives
- **Practice real-world examples**: Look for "RealExample" or "ReallifeAPI" files

## Troubleshooting

### Command not found: node
- Ensure Node.js is installed: `node --version`
- Add Node.js to your system PATH if needed

### Module not found errors
- Some examples require additional packages. Install them with `npm install <package-name>`
- Common packages: prompt-sync, readline

### Script won't run
- Check for syntax errors with `node -c filename.js`
- Ensure the file path is correct
- Verify the .js file extension

## Notes

- All files are beginner-friendly practice examples with progressive difficulty
- Interview questions ("IQ" files) prepare you for technical assessments
- Each chapter folder includes its own detailed README for quick reference
- Solutions include various approaches to teach multiple problem-solving patterns
