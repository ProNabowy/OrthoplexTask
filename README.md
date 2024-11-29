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

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- Vite (for development server)

### Installation
1. Clone the repository: 
   git clone <repository-url>
   cd orthoplex-task
2. npm install
3. npm run dev
4. http://localhost:3000


# Key Libraries Used

- **React**: Frontend library.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API integration.
- **Vite**: Build tool for faster development.
- **React Router**: For managing application routes.

## API Integration

- The profile page fetches data from an API endpoint using Axios.
- Ensure the backend is running and the API URL is correctly configured in the application.

## Improvements and Future Enhancements

- Enhance error messages and input validation feedback.
- Improve UI/UX with additional animations and transitions.
- Implement additional features like password recovery.

## How to Contribute

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   git checkout -b feature-name
   ```
3. Commit your changes:
   git commit -m "Description of changes"
   ```
4. Push your changes to your fork:
   git push origin feature-name
   ```
5. Create a pull request.

---

Thank you for reviewing this project! For any feedback or queries, feel free to reach out.
