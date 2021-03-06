import dotenv from 'dotenv';

dotenv.config();
const SERVER_PORT = process.env.PORT || 3000;
const DB_URL = (process.env.NODE_ENV == 'test' ? process.env.DB_URL_TEST : process.env.DB_URL) || 'mongodb://localhost:27017/walletsxchange';
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL || 'http://localhost:4000/api/email/send';
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET || '';

const SERVER = {
    port: SERVER_PORT,
    dbUrl: DB_URL,
    hostname: SERVER_HOSTNAME,
    emailServiceUrl: EMAIL_SERVICE_URL,
    paystackSecret: PAYSTACK_SECRET
};

const config = {
    server: SERVER
};

export default config;
