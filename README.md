# 🔗 URL Shortener

A simple and powerful full-stack URL Shortener built with **MERN Stack** (MongoDB, Express.js, React.js, Node.js). Shorten long and ugly links like magic ✨ — no authentication, no hassle.

## 🚀 Features

- 🔐 No sign-up required
- 🧠 Automatically generates unique short links using `nanoid`
- 📊 Tracks total visits and click timestamps
- 🧾 Built-in analytics API
- 🔗 Example short URL: `https://shorturl.at/abc123`
- 📦 Simple and clean frontend using **React**
- 🌐 CORS configured for frontend-backend connection

---

## 🛠 Tech Stack

| Tech           | Use                      |
|----------------|--------------------------|
| MongoDB        | Database                 |
| Express.js     | Server-side framework    |
| React.js       | Frontend UI              |
| Node.js        | Runtime engine           |
| Nanoid         | Generate short IDs       |
| Axios          | API calls in frontend    |

---

## 📁 Folder Structure

📦url-shortener/
┣ 📂backend/
┃ ┣ 📂controllers/
┃ ┃ ┗ urlController.js
┃ ┣ 📂models/
┃ ┃ ┗ url.js
┃ ┣ 📂routes/
┃ ┃ ┗ urlRoutes.js
┃ ┣ 📂config/
┃ ┃ ┗ dbConnection.js
┃ ┗ server.js
┣ 📂frontend/
┃ ┣ 📂src/
┃ ┃ ┣ App.jsx
┃ ┃ ┣ components/
┃ ┃ ┃ ┗ UrlShortener.jsx
┃ ┃ ┗ index.css
┃ ┗ vite.config.js
┗ README.md

## ⚙️ How to Run Locally

### 📦 Backend
cd backend
npm install
# Add your .env file with MONGO_URI
node server.js

### 💻 Frontend
cd frontend
npm install
npm run dev

