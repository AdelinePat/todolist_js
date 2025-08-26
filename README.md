# todolist_js

Personal training project : first Javascript mini-project

## Goals

- Add element
- Delete element
- Edit element status
- Validate element status
- Display list

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
├── 📁 src/
│   ├── events.js
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── taskTemplate.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── 📖 README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
└── vite.config.js
```
