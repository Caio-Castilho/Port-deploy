import axios from 'axios';
import NextCors from 'nextjs-cors';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DB_HOST,
})

async function handler(req, res) {
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
       // Options
       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'OPTIONS', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
 
    // Rest of the API logic
    res.json({ message: 'Hello NextJs Cors!' });
 }