Event Management Project

Overview

This project is a MERN Stack (MongoDB, Express.js, React.js with Next.js, Node.js) Event Management System that allows users to create, manage, and explore events.

Tech Stack

Frontend: Next.js (React, TypeScript), Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Database: MongoDB (Local or compase)


Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/event-management.git
cd event-management

2. Setup Backend

cd backend
npm install

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your-mongodb-uri

Start the Backend Server

# Using Nodemon
dnpm install -g nodemon
nodemon server.js

# Or using Node.js
node server.js

Server runs at: http://localhost:5000

3. Setup Frontend

cd ../frontend
npm install

Create a .env.local file in frontend folder:

NEXT_PUBLIC_API_URL=http://localhost:5000

Start the Frontend

npm run dev

Frontend runs at: http://localhost:3000

API Endpoints

Event Routes

GET /api/events → Get all events

GET /api/events/:id → Get event details

POST /api/events → Create a new event

PUT /api/events/:id → Update an event

DELETE /api/events/:id → Delete an event

Contact Page Route

POST /api/contact → Submit a contact form

Deployment

Deploy Backend on Render/Heroku

Push backend code to GitHub

Create a Render/Heroku app

Set environment variables (MONGO_URI, etc.)

Deploy the backend

Deploy Frontend on Vercel

Push frontend code to GitHub

Connect the repository to Vercel

Set NEXT_PUBLIC_API_URL to backend URL

Deploy

License

This project is open-source and available under the MIT License.

