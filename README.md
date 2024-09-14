# To-Do Application with User Authentication

This repository contains a **To-Do Application** built using **Vite**, **Tailwind CSS**, and **React Context** for authentication management. The application allows users to register, log in, and manage their tasks (CRUD operations) while persisting the task list across sessions using **LocalStorage**.

## Repository Link
[To-Do Application GitHub Repository](https://github.com/Kaushallaya/ToDo_app_vite_taildwind.git)

## Table of Contents
- [Project Features](#project-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Responsive Design](#responsive-design)
- [License](#license)
  
## Project Features

### 1. **User Authentication**
- **Login and Logout Pages**:
  - The application includes a login page where users can enter their credentials (email and password) to access the dashboard.
  - Logout functionality is available at the top-right corner of the dashboard, allowing users to securely log out of their session.
- **Sign-up Page**:
  - New users can register using the sign-up page, which requires an email, name, and password.
- **Authentication Management**:
  - Authentication is handled through **React Context** with local state management.
  - No backend is used, but authentication state is maintained across different pages within the app.

### 2. **To-Do List**
- **Add Tasks**: Users can add new tasks, providing a **title** and an optional **description**.
- **Edit Tasks**: Users can edit the title and description of existing tasks (only if they are not marked as completed).
- **Delete Tasks**: Users can remove tasks from the list.
- **Mark as Completed**: Users can toggle the status of tasks between **completed** and **incomplete**.
- **Persistence**: Tasks are stored in **LocalStorage**, so they persist across page reloads.

### 3. **Responsive Design**
- The application uses **Tailwind CSS** to ensure a clean, modern, and responsive UI.
- The layout adjusts smoothly for both mobile and desktop devices, with forms and lists stacking appropriately on smaller screens.

## Prerequisites
To run this project, you need to have the following installed on your machine:
- **Node.js** (version 14.x or higher)
- **npm** or **yarn** (for package management)

### Installation
To get started, clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/Kaushallaya/ToDo_app_vite_taildwind.git

# Navigate into the project directory
cd react-todo-dashboard/Training_project_2

# Install dependencies
npm install
# or if you're using yarn
yarn install
```

### Running the Application
Once all dependencies are installed, you can run the development server:

```bash
# Start the development server
npm run dev
# or if you're using yarn
yarn run dev
```

This will start the application in development mode, and you can view it in the browser by navigating to:

```
http://localhost:3000
```

## Project Structure

```bash
ToDo_app_vite_taildwind/Training_project_2
│
├── public/                     # Public assets
│   ├── index.html
│
├── src/                        # Application source code
│   ├── components/             # Page components (Login, Signup, Dashboard)
│   │   ├── LoginPage.js        # Login page
│   │   ├── SignupPage.js       # Signup page
│   │   └── Dashboard.js        # Dashboard with to-do functionality
│   ├── services/
│   │   ├── AuthContext.js      # React Context for managing authentication
│   │   └── PrivateRoute.js 
│   ├── App.js                  # Main app component with routes
│   ├── index.js                # Entry point
│   └── ...
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Project dependencies and scripts
├── README.md                    # This readme file
└── ...
```

### Key Files
- **LoginPage.js**: Contains the login form and handles user authentication.
- **SignupPage.js**: Handles new user registration (UI only).
- **Dashboard.js**: Main to-do list functionality (CRUD operations).
- **AuthContext.js**: Manages authentication state using React Context.
- **TodoItem.js**: Renders individual to-do items and handles task updates.
  
## Dependencies

The key dependencies for the project include:
- **React**: Core library for building the user interface.
- **Vite**: Development server and build tool for fast builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For managing routing between pages (login, signup, dashboard).
- **React Context**: For managing global authentication state.
- **Formik & Yup**: For form handling and validation.

## Features Based on the Assignment

1. **User Authentication**:
   - Registration and login are implemented using **Formik** and **Yup** for form validation.
   - Authentication state is managed using **React Context**.
   - Both forms include validation and user feedback for successful login/registration.

2. **To-Do List Features**:
   - Users can add, edit, delete, and mark tasks as completed.
   - Tasks have a title, description, and status (completed/incomplete).
   - Completed tasks are visually distinguished.
   - **LocalStorage** is used to persist tasks across page reloads.

3. **UI/UX and Responsive Design**:
   - Clean and responsive design using **Tailwind CSS**.
   - Works on mobile, tablet, and desktop screens.

### Installing Tailwind CSS
Tailwind CSS is already included in the project. However, if you're integrating it into a different project, follow these steps:

1. Install Tailwind CSS via npm:
   ```bash
   npm install -D tailwindcss
   ```
2. Initialize Tailwind in your project:
   ```bash
   npx tailwindcss init
   ```
3. Add the following to your `tailwind.config.js`:

   ```js
   module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```
4. Add Tailwind's styles to your `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Responsive Design
The entire application is designed with mobile responsiveness in mind:
- **Flexible layouts**: The to-do list and forms adjust smoothly on mobile, tablet, and desktop.
- **Stacking elements**: On smaller screens, elements stack vertically for better readability.
- **Responsive text and buttons**: Font sizes and button layouts change appropriately based on screen size.

### Breakpoints:
- `sm`: Small devices (640px and up)
- `md`: Medium devices (768px and up)
- `lg`: Large devices (1024px and up)
- `xl`: Extra-large devices (1280px and up)

## License

All rights reserved. This project is licensed under the following terms:

© 2024 Bagya Kaushallya. All rights reserved.
For more details, visit my LinkedIn profile: [Bagya Kaushallya](https://www.linkedin.com/in/bagya-kaushallaya-a16828174/).
