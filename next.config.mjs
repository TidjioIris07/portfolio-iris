import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GMAIL_USER: process.env.GMAIL_USER,
        GMAIL_PASS: process.env.GMAIL_PASS,
        GMAIL_DEST: process.env.GMAIL_DEST,
        // Add other variables you want to expose here
    },
};

export default nextConfig;
