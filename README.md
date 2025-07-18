# 🧠 Speak2DB — AI-Powered SQL & MongoDB Query Generator

Speak2DB is an AI-powered tool that enables users — even those without technical knowledge — to generate **SQL and MongoDB queries** using natural language.

> Example:  
> 💬 _"Show me all customers who signed up in the last 30 days."_  
> ➡️ Speak2DB generates the appropriate SQL or MongoDB query instantly!

---

## 🎯 Key Features

- 🔍 **Natural Language to Query**: Convert plain English into SQL or MongoDB queries using AI.
- 💾 **Supports Multiple Databases**: Generate queries for both SQL (MySQL/PostgreSQL) and NoSQL (MongoDB).
- 🧠 **AI-Powered Engine**: Leverages large language models (LLMs) to understand context and generate optimized queries.
- 🧾 **History Panel**: See previously generated queries and re-use them.
- 👤 **User Authentication**: Secure login and registration for managing query history per user.
- 🎨 **Clean & Responsive UI**: Built with React and TailwindCSS for a seamless user experience.
- 🔐 **Safe Query Output**: Prevents destructive operations unless explicitly confirmed (like `DROP`, `DELETE`, etc).

---

## 💡 Why This Project?

There are many AI tools available, but **Speak2DB is built from scratch with customization in mind**:

- You control the logic, security, and UI/UX.
- Learn full-stack development with real-world architecture.
- Tailor it for specific use cases (non-tech users, education, analytics teams).
- Optionally turn it into a SaaS tool or internal admin panel.

> This project also serves as a **powerful portfolio project** showcasing:
> - Full-stack React + Node.js + MongoDB
> - LLM integration
> - Secure authentication
> - AI-driven UX decisions

---

## ⚙️ Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with SQL generation logic also handled by AI)
- **AI Integration**: OpenAI or similar LLM for natural language understanding
- **Auth**: JWT-based user login/signup
- **Tooling**: ESLint, Prettier, Husky, lint-staged, Git Hooks

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/speak2db.git
cd speak2db
