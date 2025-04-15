# 🛍️ ShopNest – MERN Stack eCommerce Website

**ShopNest** is a fully functional, production-ready eCommerce platform built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It provides a seamless shopping experience with features like product browsing, filtering, variant selection, cart management, checkout with multiple payment gateways, and a secure admin dashboard for product and order management.

> 🔥 Deployed on **Render** (Frontend, Backend & Admin) for global accessibility.

---

## 🌐 Live Demo

🔗 [https://shopnest-frontend.onrender.com](https://shopnest-frontend.onrender.com)

---

## 🧑‍💼 Why This Project Stands Out

- **Real-World Functionality** – Full shopping flow with product variants, payments, and order tracking.
- **Admin Dashboard Included** – A secure panel for managing products, orders, and customers.
- **Multiple Payment Options** – Supports Razorpay and Cash on Delivery.
- **Authentication** – Secure JWT-based login for both users and admins.
- **Production Deployment** – Hosted on Render with environment configurations.
- **Modern UI/UX** – Built using Tailwind CSS and Vite for fast and responsive interfaces.

---

## 🧰 Tech Stack

| Layer       | Technologies                          |
|-------------|----------------------------------------|
| Frontend    | React.js, Tailwind CSS, Vite           |
| Admin Panel | React.js, Tailwind CSS, Vite           |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB Atlas                          |
| Auth        | JWT (JSON Web Token)                   |
| Payments    | Razorpay, Cash on Delivery             |
| Storage     | Cloudinary, Multer                     |
| Deployment  | Render (Frontend, Backend, Admin)      |

---

## 🚀 Project Setup (Run Locally)

> Open three terminals in **VS Code** for `frontend`, `admin`, and `backend`.

### 🔹 Frontend (User Side)
```bash
cd frontend
npm install
npm run dev
```
### 🔹 Admin Dashboard
```bash
cd admin
npm install
npm run dev
```
### 🔹 Backend (API Server)
```bash
cd backend
npm install
npm run server
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory with the following keys:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

STRIPE_SECRET_KEY=your_stripe_key
```

---

## ✨ Features Breakdown

### 🛒 User Features

- Browse, filter, and sort products
- Select product size/variant and add to cart
- Checkout using Razorpay, Stripe, or Cash on Delivery
- Secure login and user-specific order history
- ⚠️ Note: Stripe payment integration is currently a work in progress and may not function as expected. Please use Razorpay or Cash on Delivery for testing.

### 🛠️ Admin Features

- Secure admin authentication
- Add/edit/delete products with image uploads
- View and manage all customer orders
- Real-time dashboard for product and order stats

---

## 📦 Key Dependencies

### Frontend / Admin

- React, Tailwind CSS, Vite  
- axios, react-router-dom, react-toastify  
- lucide-react, framer-motion  

### Backend

- express, mongoose, cors, dotenv  
- jsonwebtoken, bcrypt, validator  
- multer, cloudinary  
- stripe, razorpay  

---

## 💼 Author & Contact

**👩‍💻 Author**: Sidhi Garg  
📧 Email: [sidhigargofficial20@gmail.com](mailto:sidhigargofficial20@gmail.com)  
🔗 LinkedIn: [https://www.linkedin.com/in/sidhi-garg-999932359/](https://www.linkedin.com/in/sidhi-garg-999932359/)

---

## 🤝 Open to Collaboration

I'm actively looking for opportunities as a **Full Stack Developer**.  
If you’re hiring or working on exciting projects, let’s connect!
