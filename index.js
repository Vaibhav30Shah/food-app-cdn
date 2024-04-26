const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const controllers = require("./controller.js")

dotenv.config();

const app = express();

const dbConnect = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connnected successfully!");
    } catch (error) {
        console.log(error)
        console.log("Database connection error!");
    }
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/api/get-foods",controllers.getAllFoods)
app.get("/api/get-menus",controllers.getAllMenus)
app.get("/api/get-restaurants",controllers.getAllRestaurants)
app.get("/api/get-menus2/:id",controllers.getAllMenusByResturant)
app.get('/api/menus/:menuId/foods', controllers.getFoodItemsByMenuId);


// Start the server
const PORT = process.env.PORT || 3000;

dbConnect().then(()=>{
    app.listen(PORT, () => console.log('Server is running at port: '+ PORT));
});