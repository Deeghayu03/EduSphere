# EduSphere Backend

EduSphere is a modular monolithic MERN-based ecosystem designed for university student collaboration, engagement tracking, AI-assisted grading, and marketplace functionality.

---

## 🏗 Architecture

This backend follows a **Modular Monolithic Architecture**:

React Frontend  
↓  
Node.js + Express API  
↓  
MongoDB Atlas  
↓  
Python AI Microservice (separate service)

Each module is independent and contains its own:
- Routes
- Controllers
- Services
- Models

All modules run inside a single Express server.

---

## 📁 Folder Structure


backend/
├── config/
├── middleware/
├── modules/
├── routes/
├── services/
├── app.js
├── server.js


Modules:
- users
- kuppi
- engagement
- marketplace
- gradePredictor
- chatbot

---

## ⚙️ Environment Setup

Create a `.env` file in `/backend`:


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

## 🚀 Installation

```bash
cd backend
npm install
npm run dev

Server runs on:

http://localhost:5000
✅ Health Check

Verify backend & database connection:

GET http://localhost:5000/health

Expected response:

{
  "status": "ok",
  "db": "connected"
}
🔐 Authentication (Planned)

JWT-based authentication

Role-based access control (Student / Admin)

🧪 Test Endpoints

Temporary test endpoints:

GET /api/users/test
GET /api/kuppi/test
GET /api/engagement/test
GET /api/marketplace/test
GET /api/chatbot/test
GET /api/grade-predictor/test
👥 Team Rules

Do not modify folder structure.

Do not mix AI logic inside frontend.

All DB access must go through service layer.

Ranking logic must be server-side.

Follow module boundaries strictly.

🧠 Project Vision

EduSphere is a unified intelligent ecosystem combining:

Student marketplace

Academic support (Kuppi)

Engagement & leaderboard

AI grade prediction

Hybrid AI chatbot

All integrated under a single clean backend architecture.


---

# 🎯 Final Check

After fixing:

Your backend should look like:


backend/
├── .gitignore ✅
├── .env (ignored)
├── README.md ✅
├── node_modules (ignored)
├── config/
├── middleware/
├── modules/
├── routes/
├── services/
├── app.js
└── server.js