📝 Task Tracker – Full Stack Application

A simple full-stack Task Tracker application built using Java, Spring Boot, MySQL, and a vanilla HTML/CSS/JavaScript frontend.
The project follows a layered architecture and exposes RESTful APIs to manage user-specific tasks.

🚀 Features

User registration

Create, view, and delete tasks

One user can manage multiple tasks

REST API based communication (JSON)

Clean separation of Controller, Service, Repository, and Entity layers

Simple frontend using Fetch API (no frameworks)

🛠 Tech Stack

Backend

Java (Core Java, OOP concepts)

Spring Boot

Spring MVC

Spring Data JPA (Hibernate)

REST APIs

Database

MySQL

Tables: users, tasks

Relationship: One User → Many Tasks

Frontend

HTML

CSS

JavaScript

Fetch API

📂 Project Structure

task-tracker/
│
├── backend/
│   ├── pom.xml
│   └── src/main/java/com/example/tasktracker/
│       ├── controller/
│       ├── service/
│       ├── repository/
│       └── entity/
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

⚙️ Backend Setup

1️⃣ Prerequisites

Java 11 or 17

Maven

MySQL

IDE (IntelliJ / Eclipse / VS Code)

2️⃣ Create Database

CREATE DATABASE task_tracker;

3️⃣ Configure Database

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/task_tracker

spring.datasource.username=root

spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

4️⃣ Run Backend

cd backend

mvn spring-boot:run

🎨 Frontend Setup

Navigate to frontend/

Open index.html in a browser

Frontend communicates with backend using REST APIs

🧠 Architecture Overview

Controller Layer – Handles HTTP requests

Service Layer – Business logic

Repository Layer – Database access (JPA)

Entity Layer – Table mappings and relationships

Frontend communicates with backend using REST APIs (JSON).


