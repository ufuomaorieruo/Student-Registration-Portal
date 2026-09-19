# Student Registration Portal

A full-stack student registration application built with **HTML, CSS, JavaScript, Azure Functions, and Azure SQL Database**.

The application provides a simple interface for registering students, viewing registered students, and deleting student records. The frontend communicates with a serverless backend through HTTP APIs, with student data persisted in Azure SQL Database.

## Features

* Register a new student
* View registered students
* Delete a student
* Store student records in Azure SQL Database
* REST API built with Azure Functions
* Frontend-to-backend HTTP communication
* SQL database integration

## Technology Stack

* HTML
* CSS
* JavaScript
* Node.js
* Azure Functions
* Azure SQL Database
* Git
* GitHub

## Application Architecture

```text
User
  |
  v
Frontend
HTML + CSS + JavaScript
  |
  | HTTP Requests
  v
Azure Functions API
  |
  | SQL Queries
  v
Azure SQL Database
```

## API Endpoints

### Register Student

```text
POST /api/students
```

Registers a new student using:

* Full Name
* Email
* Course

### Get Students

```text
GET /api/students
```

Retrieves registered students from the database.

### Delete Student

```text
DELETE /api/students?id={StudentID}
```

Deletes a student using their Student ID.

## Project Structure

```text
student-portal/
│
├── index.html
├── script.js
├── style.css
├── README.md
│
└── student-api/
    ├── src/
    │   ├── functions/
    │   │   ├── db.js
    │   │   └── students.js
    │   │
    │   └── index.js
    │
    ├── package.json
    └── host.json
```

## How It Works

1. A user enters student information through the frontend.
2. JavaScript sends the information to the Azure Functions API using a POST request.
3. The Azure Function processes the request and stores the student record in Azure SQL Database.
4. Users can retrieve registered students through a GET request.
5. Users can delete a student through a DELETE request.
6. The frontend refreshes the student list after a successful deletion.

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/ufuomaorieruo/Student-Registration-Portal.git
```

### 2. Open the project

```bash
cd Student-Registration-Portal
```

### 3. Start the Azure Functions backend

```bash
cd student-api
npm install
npm start
```

The API runs locally at:

```text
http://localhost:7071/api/students
```

### 4. Open the frontend

Open `index.html` using a local development server such as VS Code Live Server.

## Database

The application uses Azure SQL Database to persist student records.

Student records include:

* Student ID
* Full Name
* Email
* Course
* Registration Date

## What I Practiced

This project provided practical experience with:

* Building a web application
* Creating HTTP APIs with Azure Functions
* Connecting Node.js to Azure SQL
* Executing SQL queries from a backend application
* Working with GET, POST, and DELETE HTTP methods
* Handling API responses and errors
* Connecting frontend JavaScript to a backend API
* Using Git and GitHub for version control

## Project Status

**Completed and tested locally.**

Current functionality:

* Create student records
* Read student records
* Delete student records
* Persist data in Azure SQL Database
