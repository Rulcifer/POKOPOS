const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})