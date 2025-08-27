## VaultRead- Advanced Library Management System

Built an advanced **Library Management System** using the **MongoDB**, **Node.js**, **Express.js**, **HBS** to manage books, users, and borrow/return requests.

---

## 🚀 Features

- 🔐 User Authentication (Admin & User roles)
- 📖 Book Management (CRUD operations)
- 📥 Borrow & Return Tracking
- 📌 Request Management (Requested → Borrowed → Due → Overdue → Returned)
- 🗄️ Admin Dashboard to manage library records
- 📱 Responsive and simple UI with HBS templating
- 🛠️ Follows **MVC Architecture** for clean code structure

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) for backend server and APIs
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) for database and ODM
- [Handlebars (HBS)](https://handlebarsjs.com/) for server-side templating
- [dotenv](https://github.com/motdotla/dotenv) for environment variable management
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) for password hashing
- [express-session](https://github.com/expressjs/session) for authentication sessions
- **Architecture**: MVC (Model-View-Controller)

---

## 📂 Project Structure

```
VaultRead/
│
├── src/
│   ├── config/            # Database and app configuration
│   ├── controllers/       # Business logic and route handlers
│   ├── middleware/        # Custom middlewares (auth, validation, etc.)
│   ├── model/             # Mongoose models (User, Book, Request, etc.)
│   ├── public/            # Static files (CSS, JS, images)
│   ├── routes/            # Express route definitions
│   ├── script/            # Utility scripts (e.g., seed admin)
│   ├── uploads/           # Uploaded files (if any)
│   ├── utils/             # Helper functions
│   ├── views/             # Handlebars templates
│   └── app.js             # Express app initialization
│
├── server.js              # Server entry point
├── .env                   # Environment variables
├── package.json
├── package-lock.json
└── README.md
```

## 🖥️ Setup Instructions

Clone repo and install dependencies:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install # or npm install / yarn install

```

Run Locally:

```bash

MONGO_URI=mongodb://localhost:27017/vaultread
PORT=5000
SESSION_SECRET=your_secret_key
NODE_ENV=production
jwt_secret=JWT_SECRET

#Admin Data
Firstname="F_name"
Lastname="L_name"
Email="admin@gmail.com"
Password="Admin_pass"
```

Seed the Admin:
Run the seeding script to insert a default admin into the database:

```bash
node src/script/createAdmin.js
```

Start the server

```bash
npm run start

```

Server will be running at: http://localhost:5000

Build Production

```bash
npm build
```

## 👤 Author

Bhumika Salunkhe – [GitHub](https://github.com/Bhumika2101) | [LinkedIn](https://www.linkedin.com/in/bhumika-salunkhe-02263725b)
