import dotenv from 'dotenv';
import session from 'express-session';
dotenv.config();

const _config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    sessionSecret: process.env.sessionSecret,
    NODE_ENV: process.env.NODE_ENV || "development",
    jwt_secret: process.env.jwt_secret,
    Admin_Firstname: process.env.Firstname,
    Admin_Lastname: process.env.Lastname,
    Admin_Email: process.env.Email,
    Admin_Password: process.env.Password,

};

const config = Object.freeze(_config);
export default config;



