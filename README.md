# 🧠 AI Mock Interview

**AI Mock Interview** is a smart web application that simulates real interview environments using voice-based conversations with an AI agent. It helps users prepare for **technical**, **behavioral**, or **mixed** interviews through an interactive voice call, powered by **Vapi AI**, **Google Gemini API**, and built using **Next.js**, **Tailwind CSS**, and **Firebase**.

---

## 🚀 Features

- 🎙️ **AI-powered Voice Interviews**  
  Interact with a lifelike AI agent that simulates an interviewer via voice call.

- 🧭 **Custom Interview Setup**  
  Choose the type of interview (Technical / Behavioral / Mixed), number of questions, and difficulty level.

- 📄 **Live Transcript Generation**  
  Watch your spoken responses being transcribed in real time during the interview.

- 🧪 **Realistic Interview Flow**  
  Engage in a seamless, real-time voice call for a fully immersive experience.

- 📊 **Post-Interview Feedback**  
  Get instant scoring and detailed feedback powered by **Google Gemini API**.

- ☁️ **Firebase Integration**  
  User authentication, session tracking, and data storage.

- 💅 **Responsive UI**  
  Clean, mobile-friendly interface styled with Tailwind CSS and optimized via Next.js.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **AI Agent & Voice Call**: [Vapi AI](https://www.vapi.ai/)
- **Live Transcription & Feedback**: [Google Gemini API](https://deepmind.google/technologies/gemini/)
- **Backend/Database**: [Firebase](https://firebase.google.com/)
- **Authentication**: Firebase Auth

---

## 🧭 Application Flow

### 1. Interview Setup

- Users choose:
  - Interview Type: `Technical`, `Behavioral`, or `Mixed`
  - Number of questions
  - Optional: Specific job role or domain
- The AI agent is initialized with this context.

### 2. Voice Call Interview

- Users receive a real-time voice call from the AI agent (powered by **Vapi AI**).
- A **live transcript** of the conversation appears during the call.
- The agent asks questions based on the user’s selected preferences.

### 3. Feedback & Scoring

- Once the interview ends:
  - The conversation transcript is processed by **Google Gemini API**
  - Feedback includes:
    - Performance score (out of 10)
    - Strengths and areas for improvement
    - Summarized answers and advice

---

## 📦 Installation & Setup

```bash
- git clone https://github.com/yourusername/ai-mock-interview.git
- cd ai-mock-interview
- npm install

---

## Create an env.local file and store all the environment variables
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```
