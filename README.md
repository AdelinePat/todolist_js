# todolist_js

A dynamic Todo List project to practice JavaScript DOM manipulation and event handling.
This project was done as part of a Javascript Certification on Dyma.
### goals
- Practiced DOM manipulation and event delegation in JavaScript
- Learned how to maintain a separation of concerns between data (array), DOM, and event handling
- Implemented dynamic editing with input swapping, validation, and cancelation
- Improved debugging skills handling edge cases (empty input, cancel edits, toggle done)
- Gained experience with Docker for reproducible development environments

## Features

- **Display**: Each element of the list is created from Javascript (using an array inside index.js) and has edit and delete buttons
- **Add Task**: A form on top of the todo list allows the user to enter a task inside an input and validate it through the add button or enter key
- **Delete Task**: As mentioned, each task has its own delete button, delegation of event is used to trigger the event properly.
- **Edit Task** :
  Two main approaches :
  - _View Mode_: edit / delete
  - _Edit Mode_: validate / cancel (paragraph is swapped for an input with focus and selection, validate button or enter key allows to save the new task, cancel button or escape key gets the original task back inside a paragraph)
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
Open [http://localhost:5173](http://localhost:5173) to view the dev server.

#### Build + Preview production build:

Run the following commands to generate dist directory and get the preview on [http://localhost:4173/](http://localhost:4173/).

```bash
docker compose exec dev npm run build
docker compose exec dev npm run preview
```
Remember: `npm run build` must be executed before preview, otherwise you’ll get a 404, as the preview server only serves the dist/ folder.

### 💻 Environment setup on host (option 2)

If you do not wish to use Docker, you can run the project directly on your machine.

#### ✅ Prerequisites

- Node.js and npm installed on your machine

#### Project setup with node.js

```bash
npm init -y
npm i -D vite
```

This initializes a Node project (if not already initialized) and installs Vite as a development dependency

Start the project, build it to get the dist directory and then get the preview on [http://localhost:4173/](http://localhost:4173/)

#### Dev server:
```bash
npm run start
```
Opens [http://localhost:5173](http://localhost:5173)

#### Build + preview
```bash
npm run build
npm run preview
```
Opens [http://localhost:4173/](http://localhost:4173/)

⚠️ Opening dist/index.html directly in the browser (file:///) will not work because modern browsers block ES module imports for local files. Always use `npm run preview` or serve the folder over HTTP.

---

### Project structure

```
📁 Todolist_js
 ├── 📁 src/
 │    ├── elements.js
 │    ├── errors.js
 │    ├── events.js
 │    ├── index.html
 │    ├── index.js
 │    ├── style.css
 │    └── updateArray.js
 ├── .dockerignore
 ├── .gitignore
 ├── Dockerfile
 ├── README.md
 ├── docker-compose.yml
 ├── package-lock.json
 ├── package.json
 └── vite.config.js
```

Core Javascript logic is split across `events.js` `elements.js` and `updateArray.js`.
