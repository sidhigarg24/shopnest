🛍️ ShopNest – MERN Stack eCommerce Website
ShopNest is a fully functional, production-ready eCommerce platform built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless shopping experience with features like product browsing, filtering, variant selection, cart management, checkout with multiple payment gateways, and a secure admin dashboard for product and order management.

🔥 Deployed on Render (Frontend & Backend) for global accessibility.

🌐 Live Demo
🔗 https://shopnest-frontend.onrender.com

🧑‍💼 Why This Project Stands Out
Real-World Functionality – Includes full shopping flow: product variants, payments, and order tracking.

Admin Panel – Built-in admin dashboard to manage products and monitor sales.

Multiple Payment Options – Integrated with Razorpay, Stripe, and Cash on Delivery.

Secure Authentication – JWT-based login system for both users and admin.

Production Deployment – Deployed on Render with environment variables and scalable architecture.

Clean UI/UX – Built with modern UI libraries like Tailwind CSS and optimized with Vite.

🧰 Tech Stack

Layer	Technologies
Frontend	React.js, Tailwind CSS, Vite
Backend	Node.js, Express.js
Database	MongoDB Atlas
Auth	JWT (JSON Web Token)
Payments	Stripe, Razorpay, Cash on Delivery
Storage	Cloudinary, Multer (Image Uploads)
Deployment	Render (Frontend & Backend)
🚀 Project Setup (Run Locally)
Open three terminals in VS Code for frontend, admin, and backend.

🔹 Frontend (User Side)
bash
Copy
Edit
cd frontend
npm install
npm run dev
🔹 Admin Dashboard
bash
Copy
Edit
cd admin
npm install
npm run dev
🔹 Backend (API Server)
bash
Copy
Edit
cd backend
npm install
npm run server
🔐 Environment Variables
Create a .env file inside the backend/ directory with the following keys:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

STRIPE_SECRET_KEY=your_stripe_key
✨ Features Breakdown
🛒 User Features
Browse, filter, and sort products

Select size/variant and add to cart

Checkout with multiple payment options

Secure login and user-specific order history

🛠️ Admin Features
Admin authentication with secure access

Add/edit/delete products with images

View all orders and customer details

Real-time product and order management

📦 Key Dependencies
Frontend / Admin
React, Tailwind CSS, Vite

axios, react-router-dom, react-toastify

lucide-react, framer-motion

Backend
express, mongoose, cors, dotenv

jsonwebtoken, bcrypt, stripe, razorpay

multer, cloudinary, validator

💼 Author & Contact
👩‍💻 Author: Sidhi Garg
📧 Email: sidhigargofficial20@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/sidhi-garg-999932359/

🤝 Open to Collaboration
I'm actively looking for opportunities as a Full Stack Developer.
If you’re hiring or collaborating on exciting projects, feel free to reach out!

