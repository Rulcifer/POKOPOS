const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT

const productController = require('./product/product.controller')
const categoryController = require('./category/category.controller')

app.use(express.json());
app.get("/api", (req, res) => {
    res.send("Selamat datang di API akuh");
});


app.use('/products', productController)
app.use('/category', categoryController)



app.listen(port, () => {
    console.log(`API running in port: http://localhost:${port}`);
});