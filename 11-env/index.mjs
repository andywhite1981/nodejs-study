import { config } from 'dotenv';
config();

// // Imports entire module encluding default export
// import * as dotenv from 'dotenv';
// console.log(dotenv.default);
// dotenv.config();

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
