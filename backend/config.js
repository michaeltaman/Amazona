import dotenv from 'dotenv';
dotenv.config();
export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: 'AQpQmWr6R00y3JH4w7SMfGTnxQxnKiwO8E_b7di9x2onWHwz-J5dcffPdVELhOVZn_Q6nzYlc7BY-A7Z'
}