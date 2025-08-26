# todolist_js

A dynamic Todo List project to practice JavaScript DOM manipulation and event handling.
This project was done as part of a Javascript Certification on Dyma.

## Features

- Display a Todo List
- Add Task
- Delete Task
- Edit Task
- Toggle Task Status
- Error Display

### Details of feature

- **Display**: Each element of the list is created from Javascript and has edit and delete buttons
- **Add Task**: A form on top of the todo list allows the user to enter a task inside an input and validate it through the add button or enter key
- **Delete Task**: As mentioned, each task has its own delete button, delegation of event is used to trigger the event properly.
- **Edit Task** :
  Two main approaches : 
  - *View Mode*: edit / delete
  - *Edit Mode*: validate / cancel (paragraph is swapped for an input with focus and selection, validate button or enter key allows to save the new task, cancel button or escape key gets the original task back inside a paragraph)
- **Error Display**: The inputs display an error if empty.

## Tools

This project was created using HTML, CSS, Javascript and Vite for the development phase using HMR (Hot Module Replacement).
I also used docker to keep practicing my containerization skills and have a reproducible environment as I am working on two different desktops.

---

## 🔧 Environment Setup (2 options)

### 🐳 Environment setup with Docker (option 1)

For this certification, I decided to practice my docker skills by containerizing the development environment.

#### ✅ Prerequisites

- Docker installed on your machine

```bash
docker compose up --build -d
```

This will build and start the dev service from docker-compose.yml (using the image within the Dockerfile).
For now, I've only set-up the development environment.

### 💻 Environment setup on host (option 2)

If you do not wish to use Docker, you can run the project directly on your machine.

#### ✅ Prerequisites

- Node.js and npm installed on your machine

#### Project setup with node.js

```bash
npm init -y
npm i -D vite
```

This initializes a Node project and installs Vite as a development dependency

Start the project

```bash
npm run start
```

---

### Project structure

```
📁 Todolist_js
 ├── 📁src/
 │    ├── errors.js
 │    ├── events.js
 │    ├── index.html
 │    ├── index.js
 │    ├── style.css
 │    └── taskTemplate.js
 ├── .dockerignore
 ├── .gitignore
 ├── Dockerfile
 ├── 📖 README.md
 ├── docker-compose.yml
 ├── package-lock.json
 ├── package.json
 └── vite.config.js
```
Core Javascript logic is split across `events.js` and `taskTemplate.js`.
