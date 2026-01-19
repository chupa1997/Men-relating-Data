# MEN Stack Courses Lab

## 📌 Project Overview

This project is a **MEN Stack (MongoDB, Express, Node.js)** application built as a lab to demonstrate:

* Full CRUD on a primary model
* One **Referenced relationship** (One-to-Many)
* One **Embedded relationship**
* Server-side rendering using **EJS**

The application manages **Courses**, **Instructors**, and **Reviews**.

---

## 🧠 Data Relationships

### 1️⃣ Instructor → Course (Referenced)

* One Instructor can teach **many Courses**
* Each Course references **one Instructor** using `ObjectId`
* Implemented using `ref` and `populate()`

### 2️⃣ Course → Review (Embedded)

* One Course can have **many Reviews**
* Reviews are **embedded** directly inside the Course document
* No separate Review collection is used

---

## 🗂️ Project Structure

```text
project-root/
│
├── controllers/
│   ├── instructors.js
│   └── courses.js
│
├── models/
│   ├── Instructor.js
│   └── Course.js
│
├── views/
│   ├── instructors/
│   │   ├── new.ejs
│   │   ├── index.ejs
│   │   └── show.ejs
│   │
│   ├── courses/
│   │   ├── index.ejs
│   │   └── show.ejs
│   │
│   └── reviews/
│       └── index.ejs
│
├── public/
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```

---

## 📦 Models

### Instructor Model (Referenced)

* name (String, required)
* email (String, required, unique)
* yearsOfExperience (Number)

### Course Model (Primary CRUD)

* title (String, required)
* description (String)
* price (Number)
* instructor (ObjectId → Instructor)
* reviews (Embedded array)

### Review Schema (Embedded)

* studentName (String, required)
* rating (Number: 1–5)
* comment (String)

---

## 🚏 Routes Overview

### Instructor Routes (Partial CRUD)

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | /instructors/new | New instructor form  |
| POST   | /instructors     | Create instructor    |
| GET    | /instructors     | Get all instructors  |
| GET    | /instructors/:id | Get instructor by ID |

---

### Course Routes (FULL CRUD)

| Method | Endpoint            | Description                           |
| ------ | ------------------- | ------------------------------------- |
| POST   | /courses            | Create course                         |
| GET    | /courses            | Get all courses (populate instructor) |
| GET    | /courses/:id        | Get course by ID                      |
| POST   | /courses/update/:id | Update course                         |
| POST   | /courses/delete/:id | Delete course                         |

---

### Review Routes (Embedded)

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | /courses/:id/reviews | Add review to course |
| GET    | /courses/:id/reviews | View all reviews     |

---

## 🖼️ Wireframes (Text-Based)

### Instructor Index Page

```
--------------------------------
| Instructors                   |
--------------------------------
| John Doe                      |
| Jane Smith                    |
--------------------------------
```

### Course Index Page

```
--------------------------------
| Courses                       |
--------------------------------
| MERN Bootcamp                 |
| Instructor: John Doe          |
| [View Course]                 |
--------------------------------
```

### Course Show Page

```
--------------------------------
| Course Title                  |
| Description                   |
| Price                         |
| Instructor Name               |
--------------------------------
| Reviews                       |
| - Student A ⭐⭐⭐⭐           |
| - Student B ⭐⭐⭐⭐⭐         |
--------------------------------
| [Add Review Form]             |
--------------------------------
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

## ▶️ Running the App

```bash
npm install
nodemon server.js
```

App runs on:

```
http://localhost:3000
```

---

## ✅ Lab Requirements Checklist

* [x] MEN Stack
* [x] Full CRUD on Course model
* [x] Referenced relationship (Instructor → Course)
* [x] Embedded relationship (Course → Reviews)
* [x] populate() used
* [x] EJS views

---

## 📝 Notes

This lab focuses on **data modeling and relationships**, not styling. UI is intentionally minimal to emphasize backend logic and MVC structure.

---

## 🚀 Future Improvements

* Add Edit forms
* Add validation error handling
* Add CSS styling
* Add authentication
