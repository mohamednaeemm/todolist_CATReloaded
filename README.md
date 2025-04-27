# To-Do List React Application

## [Live Demo](https://your-live-demo-link.com)
> A simple, responsive To-Do List application built with React, allowing users to add, edit, delete, and reorder tasks. The app uses **localStorage** for persistence and features a clean, modular component structure with professional practices like prop passing and hooks.

## Features

- **Add Tasks**: Enter a task and press **"Add"** or **Enter** to add it to the list.
- **Edit Tasks**: Click **"Edit"** to modify a task. The input field auto-focuses for quick editing. Press **Enter** or click **"Save"** to confirm changes.
- **Delete Tasks**: Remove tasks using the **"Delete"** button.
- **Reorder Tasks**: Move tasks up or down using the **↑** and **↓** buttons, with disabled states for the first (↑) and last (↓) tasks.
- **Persistent Storage**: Tasks are saved to **localStorage** and persist across page reloads.
- **Responsive Design**: The layout adapts to various screen sizes with a constrained container width.
- **User-Friendly**: 
  - Auto-focus on edit inputs.
  - Proper cursor feedback (e.g., `not-allowed` for disabled buttons).
  - Text wrapping for long tasks.

## Tech Stack

- **React**: Frontend library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **localStorage**: Browser API for persisting tasks.
- **React Hooks**: `useState`, `useEffect`, and `useRef` for state management and DOM interactions.
