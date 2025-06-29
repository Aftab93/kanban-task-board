# 📝 Kanban Task Board

A modern Kanban task board built with **React**, **Redux**, **TailwindCSS**, and **Framer Motion** — complete with drag-and-drop task management, light/dark theme toggle, and a sleek glassy UI.

## 🚀 Features

- 🟢 Add, delete, and edit tasks
- 🔄 Drag tasks between columns (To Do, In Progress, Done)
- 🌙 Light/Dark theme toggle
- 🌐 Responsive design with a floating glassy navbar
- ⚛️ State management with Redux Toolkit
- ✨ Smooth animations using Framer Motion

## 📦 Tech Stack

- **React**: UI components
- **Redux Toolkit**: state management
- **TailwindCSS**: utility-first styling
- **Framer Motion**: drag-and-drop animations
- **Vite**: blazing-fast build tool

## 📂 Folder Structure

├── src/
│ ├── components/
│ │ ├── AddTaskModal.jsx
│ │ ├── Board.jsx
│ │ ├── Column.jsx
│ │ ├── TaskCard.jsx
│ │ └── ThemeToggle.jsx
│ ├── redux/
│ │ ├── features/
│ │ │ └── taskSlice.js
│ │ ├── selectors.js
│ │ └── store.js
│ ├── App.jsx
│ └── main.jsx
└── index.html

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/kanban-task-board.git
   cd kanban-task-board
   ```
2. Install dependencies:

```
   npm install
```

3. Start the development server:

```
   npm run dev
```
