# Smart Healthcare Management System

## Project Overview

The Smart Healthcare Management System is a full-stack web application designed to simplify hospital activities and manage patient information efficiently. It provides a centralized platform for patients, doctors, and administrators to manage appointments, patient details, and medical records.

## Objectives

- Simplify hospital management activities.
- Manage patient information efficiently.
- Make appointment booking and management easier.
- Provide separate access for patients, doctors, and administrators.
- Maintain organized healthcare information using a database.

## Technology Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Communication:** REST APIs
- **Authentication:** JWT (if implemented)

## Key Features

### Patient Module
- Patient registration and login
- View and update profile information
- Book, cancel, and reschedule appointments
- View personal medical records

### Doctor Module
- View assigned appointments
- Access relevant patient information
- Manage appointment status
- Maintain medical records

### Admin Module
- Manage patient and doctor information
- Monitor appointments
- Manage overall system activities

## System Architecture

1. Users interact with the React.js frontend.
2. The frontend sends requests to the backend through REST APIs.
3. Node.js and Express.js process the requests.
4. MySQL stores and retrieves application data.
5. The backend returns responses to the frontend.
6. The frontend displays the updated information.

## Installation and Setup

### Prerequisites
- Node.js and npm
- MySQL Server
- Git
- Visual Studio Code or another code editor

### Clone the Repository

```bash
git clone https://github.com/ANUSUYA-P-5015/Smart-Healthcare-Management-System.git
cd Smart-Healthcare-Management-System
```

### Install Dependencies

Navigate to the frontend and backend folders and run:

```bash
npm install
```

### Database Configuration

1. Start the MySQL server.
2. Create the required database.
3. Configure the database connection using environment variables.
4. Import the SQL schema or run the database scripts provided in the project.

### Run the Application

Start the backend and frontend separately using the scripts defined in their respective `package.json` files.

Open the local URL displayed by the frontend development server.

## Learning Outcomes

- Improved knowledge of full-stack web development.
- Gained practical experience with React.js and REST API integration.
- Understood backend processing and relational database operations.
- Improved debugging and problem-solving skills.
- Learned how to organize application data and manage user roles.

## Future Enhancements

- Online prescription management
- Appointment notifications
- Reports and analytics
- Cloud deployment

## Author

**Anusuya P.**

GitHub: https://github.com/ANUSUYA-P-5015
