# 🧠 TakeAQuiz - Tech Quiz App

## 📌 Project Overview
TakeAQuiz is a **MERN stack-based Tech Quiz application** that allows users to test their knowledge by answering randomly selected questions. The app is built using **React (Vite) for the frontend, Express.js & Node.js for the backend, and MongoDB for data storage**. It also features **Cypress tests** to ensure its reliability.

## 🚀 Features
✅ **Randomized Quiz** - Fetches 10 random questions from MongoDB.  
✅ **Score Tracking** - Displays total score upon completion.  
✅ **Restart Quiz** - Allows users to restart and take a new quiz.  
✅ **Responsive Design** - Works on desktop & mobile.  
✅ **Cypress Testing** - Includes **Component & E2E Tests**.  

## 🛠️ Tech Stack
- **Frontend:** React (Vite) + TypeScript + Bootstrap
- **Backend:** Node.js + Express.js + MongoDB (Mongoose)
- **Testing:** Cypress (Component & End-to-End Testing)

---

## ⚙️ Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone git@github.com:AmirJT/takeaquiz.git
cd takeaquiz
```

### **2️⃣ Install Dependencies**
```bash
npm install
cd server && npm install
cd ../client && npm install
```

### **3️⃣ Configure Environment Variables**
Create a **`.env` file** in the `server/` directory and set the MongoDB URI:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
PORT=3001
```

### **4️⃣ Start the Backend**
```bash
npm run server:dev
```

### **5️⃣ Start the Frontend**
```bash
npm run client:dev
```

### **6️⃣ Open the App**
Visit **`http://localhost:3001/`** in your browser.

---

## 🎬 Walkthrough Video
📽️ Watch the full walkthrough video here: **[INSERT VIDEO LINK]**

---

## ✅ Running Cypress Tests
### **1️⃣ Open Cypress UI**
```bash
npx cypress open --config-file cypress.config.cjs
```

### **2️⃣ Run Component Test**
```bash
npx cypress run --config-file cypress.config.cjs --component
```

### **3️⃣ Run End-to-End Test**
```bash
npx cypress run --config-file cypress.config.cjs
```

---

## 📝 License
This project is **MIT Licensed**. Feel free to contribute and improve it!

---

