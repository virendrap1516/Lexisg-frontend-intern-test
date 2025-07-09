# Lexisg Frontend Intern Test – Legal Assistant Interface with Citations

This project is a simulated frontend interface for a **Lexi-like legal assistant**. The app mimics an AI-powered legal query system that provides answers with verifiable legal citations, referencing paragraphs inside real legal documents (PDFs).


## 🌐 Live Demo




## 🚀 Features

- Ask a legal question via input panel
- Simulated AI-generated answer
- Citation displayed below the answer
- Clickable citation opens PDF in a popup (or new tab)
- Simulated highlight of specific paragraph in the PDF (bonus UI)
- Styled with modern UI (chat-like interface)

---

## 🧠 Simulation Logic

On form submission, a **mock API response** is returned containing:
- The legal answer
- Citation details with a source PDF link

Example simulated query:

> “In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988?”

---

## 📸 Screenshot








## 🖥️ Tech Stack

- React.js (Vite + React or CRA)
- Tailwind CSS (for optional styling)
- No backend required (simulated logic only)
- PDF popup handled using `react-pdf` or native browser tab

---

## 🛠️ Setup Instructions

### Run Locally

```bash

cd lexisg-frontend-intern-test
npm install
npm start
