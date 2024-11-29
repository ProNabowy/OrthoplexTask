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


## Project Folder Structure

```
src/
├── assets/         # Static assets like images, icons, etc.
├── components/     # Reusable components
│   ├── Guard/      # Route guard for protected routes
│   ├── Loader/     # Loader component for API calls
│   ├── Middleware/ # Middleware utilities
│   ├── NotFound/   # Component for 404 pages
│   └── PanelMenu/  # Sidebar or panel menu component
├── context/        # React Context for state management
├── layouts/        # Layout components
├── pages/          # Page-level components
│   ├── Auth/       # Authentication pages (Login/Register)
│   └── Profile/    # Profile (Dashboard) page
├── routes/         # Application routes and navigation
│   └── routes.jsx  # Route configuration
├── index.jsx       # Main entry point
```


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

## User Credentials

The following users can be used to log in to the application during testing:

```
1. **User 1**
   - Email: `niya@gmail.com`
   - Password: `123456789`

2. **User 2**
   - Email: `das@gmail.com`
   - Password: `dasdsa`

3. **User 3**
   - Email: `nico@gmail.com`
   - Password: `1243`

4. **User 4**
   - Email: `anas@gmail.com`
   - Password: `12345`

5. **User 5**
   - Email: `mahmoudramdn20001352000@gmail.com`
   - Password: `7745687234hfjkhfdfasiu8493295`

6. **User 6**
   - Email: `liyan@gmail.com`
   - Password: `12345678`

7. **User 7**
   - Email: `1111@mail.com`
   - Password: `1111`
```

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
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.

---

Thank you for reviewing this project! For any feedback or queries, feel free to reach out.
