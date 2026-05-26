# 📚 Lecture Scheduler System

A full-stack web application to manage courses, lectures, and instructor schedules with conflict-free lecture assignment.

---

## 🚀 Live Links

- 🌐 Frontend: https://your-netlify-link.netlify.app  
- ⚙️ Backend: https://your-render-backend.onrender.com  

---

## 👤 Default Login

### Admin Login
- Username: admin  
- Password: admin@1234  

---

## 🎯 Project Features

### 👨‍💼 Admin Features
- Admin login system
- Add / Delete Courses
- Add / Delete Lectures
- Add / View Instructors
- Assign lectures to instructors
- View all scheduled lectures

---

### 👨‍🏫 Instructor Features
- View assigned lectures
- See lecture details:
  - Course Name
  - Topic
  - Date

---

## ⚠️ Business Rule

- An instructor cannot be assigned more than one lecture on the same date.
- Backend prevents scheduling conflicts automatically.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast

### Backend
- Spring Boot
- Spring Boot REST APIs
- Spring Data JPA
- Hibernate

### Database
- MySQL

---

## 📁 Project Structure


lecture-scheduler-system/
│
├── backend/
│   ├── src/
│   │   └── main/java/com/ideamagix/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── entity/
│   │       └── dto/
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md


---

## 🔌 API Endpoints

### Courses

GET /api/courses
POST /api/courses
DELETE /api/courses/{id}


### Lectures

GET /api/lectures
POST /api/lectures
DELETE /api/lectures/{id}
GET /api/lectures/instructor/{id}


### Instructors

GET /api/instructors
POST /api/instructors


---

## ⚙️ Backend Configuration


spring.datasource.url=jdbc:mysql://localhost:3306/lecture_scheduler
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


---

## 🚀 How to Run Locally

### Backend

cd backend
mvn spring-boot:run


### Frontend

cd frontend
npm install
npm run dev


---

## 🌐 Deployment Guide

### Backend (Render)
- Build Command: mvn clean install  
- Start Command: java -jar target/*.jar  

### Frontend (Netlify)
- Build Command: npm run build  
- Publish Directory: dist  

---

## ✨ Key Highlights

- Role-based system (Admin / Instructor)
- Conflict-free lecture scheduling
- Fully responsive UI
- REST API architecture
- Clean separation of frontend & backend

---

## 👨‍💻 Author

Ranjit Kadam  
Full Stack Developer (React + Spring Boot)

---

## 📄 License

This project is created for educational and internship assessment purposes.
