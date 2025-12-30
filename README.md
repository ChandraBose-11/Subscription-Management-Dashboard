# Subscription Management Dashboard

A full-stack web application for managing subscription plans and user subscriptions. Built with a modern React frontend and a robust Node.js/Express backend.

## Features

- **User Authentication**: Secure login/signup with JWT tokens and Firebase OAuth integration
- **Subscription Plans**: Create and manage different subscription tiers
- **Dashboard**: Personalized user dashboard for subscription management
- **Admin Panel**: Administrative interface for managing users, plans, and subscriptions
- **File Uploads**: Cloudinary integration for image uploads
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS and Flowbite React
- **Real-time Updates**: Redux state management for seamless user experience

## Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - UI component library
- **Firebase** - Authentication and OAuth
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Cloud-based image management
- **Multer** - File upload middleware
- **Zod** - Schema validation

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Firebase project for authentication
- Cloudinary account for image uploads

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd subscription-management-dashboard
   ```

2. **Set up the backend**
   ```bash
   cd Server
   npm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../Client
   npm install
   ```

## Environment Variables

Create a `.env` file in the `Server` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
```

## Running the Application

1. **Start the backend server**
   ```bash
   cd Server
   npm run dev
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd Client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/google` - Google OAuth login

### Users
- `GET /api/user/:id` - Get user profile
- `PUT /api/user/:id` - Update user profile

### Plans
- `GET /api/plans` - Get all plans
- `POST /api/plans` - Create a new plan (Admin only)
- `PUT /api/plans/:id` - Update a plan (Admin only)
- `DELETE /api/plans/:id` - Delete a plan (Admin only)

### Subscriptions
- `GET /api/subscriptions` - Get user subscriptions
- `POST /api/subscriptions` - Create a new subscription
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Cancel subscription

## Project Structure

```
subscription-management-dashboard/
├── Client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── Components/     # Reusable UI components
│   │   ├── Pages/          # Page components
│   │   ├── Redux/          # State management
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
├── Server/                 # Node.js backend
│   ├── Controllers/        # Route controllers
│   ├── Database/           # Database configuration
│   ├── Middleware/         # Custom middleware
│   ├── Models/             # MongoDB models
│   ├── Routes/             # API routes
│   ├── Validation/         # Input validation schemas
│   ├── uploads/            # File upload directory
│   ├── package.json
│   └── index.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.