# Full Stack Authentication & Role-Based Access Control (RBAC) System

This project demonstrates a Full Stack Authentication System with JWT-based authentication and Role-Based Access Control (RBAC) using Spring Boot (Backend) and React + TypeScript (Frontend).

## 🚀 Tech Stack
### Backend

- Java 17

- Spring Boot

- Spring Security

- JWT Authentication

- Spring Data JPA

- Hibernate

- MapStruct

- Lombok

- Swagger / OpenAPI

- Maven

### Frontend

- React

- TypeScript

- Vite

- React Router

- Axios

- React Hook Form

- TailwindCSS

### Database

- MySQL

## 🔐 Features
### Authentication

- User Registration

- User Login

- JWT Token generation

- Secure API communication using JWT

### Role-Based Access Control

Two roles are implemented:

### USER

- Access /api/user
- View user content on dashboard

### ADMIN

- Access /api/admin
- View admin content on dashboard

---

## Frontend Features

- Register Page
- Login Page
- Dashboard
- Role-based UI rendering
- Protected Routes
- Logout functionality

### 📂 Project Structure
```text
rbac-auth-system
│
├── backend
│     - Spring Boot Application
│
├── frontend
│     - React + TypeScript Application
│
└── README.md
```
---
### ⚙️ Backend Setup

Navigate to backend folder
```text
cd backend

Configure database in application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/rbac_db
spring.datasource.username=root
spring.datasource.password=yourpassword

Run Spring Boot application
```

⚙️ Frontend Setup

Navigate to frontend folder
```text
cd frontend
```
Install dependencies

```text
npm install
```
Run frontend
```text
npm run dev
```

Application will run on:
```text
http://localhost:5173
```
---

### 🔑 API Endpoints

|   API Endpoint     |      Methods    |    Descripton    
| --------- | ---------------- | ---------------- 
| /api/auth/register     | POST | Register User
| /api/auth/login   | POST | Login user
| /api/public     | GET | Public endpoint
| /api/user   | GET | USER role required
| /api/admin   | GET | ADMIN role required
|
---
## 📸 Screenshots
### Register Page

(Add Screenshot)

### Login Page

(Add Screenshot)

### Dashboard (User Role)

(Add Screenshot)

### Dashboard (Admin Role)

(Add Screenshot)

### Swagger API

(Add Screenshot)

## 🎯 How RBAC Works

1. User registers with a role (USER / ADMIN).
2. User logs in and receives a JWT token.
3. Token is stored in localStorage.
4. Token is sent in API requests via Authorization header.
5. Spring Security validates the token and checks role permissions.
6. Frontend displays content based on user role.
---

## 👨‍💻 Author

### Santos Kumar Biswal

GitHub: https://github.com/santos021