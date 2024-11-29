# Orthoplex React Task

This repository contains the solution for the **React Development Challenge** by Orthoplex Solutions Inc. The project is structured to meet the challenge's requirements, focusing on clean code, responsiveness, and modularity.

---

## Features

### 1. **Login and Authentication**
- Login page with username and password fields.
- Input validation and redirection to the Profile (dashboard) page upon successful login.
- Includes session validation for authenticated access.

### 2. **Dashboard (Profile Page)**
- Displays dynamic data fetched from an API endpoint.
- Incorporates a **Loader** component for seamless UX during data fetching.

### 3. **Navigation**
- Responsive Navbar for navigation between login and profile pages.
- Access control for protected routes using a **Guard** middleware component.

### 4. **Responsive Design**
- Fully responsive interface using **TailwindCSS** for styling.
- Layouts adapt seamlessly to desktop and mobile screens.

### 5. **State Management**
- Centralized state management using **React Context API**.
- Ensures consistent handling of authentication and user data.

### 6. **Error Handling**
- Includes a **NotFound** component to handle unknown routes gracefully.

### 7. **Bonus Features**
- Logout functionality that clears user data and redirects to the login page.
- Backend API integration for login and user data fetching.

---

## Folder Structure

The project follows a modular folder structure for better organization and scalability:
src/ ├── assets/ # Static assets like images, icons, etc. ├── components/ # Reusable components │ ├── Guard/ # Route guard for protected routes │ ├── Loader/ # Loader component for API calls │ ├── Middleware/ # Middleware utilities │ ├── NotFound/ # Component for 404 pages │ └── PanelMenu/ # Sidebar or panel menu component ├── context/ # React Context for state management ├── layouts/ # Layout components ├── pages/ # Page-level components │ ├── Auth/ # Authentication pages (Login/Register) │ └── Profile/ # Profile (Dashboard) page ├── routes/ # Application routes and navigation │ └── routes.jsx # Route configuration ├── index.jsx # Main entry point
