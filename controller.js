const Food = require("./models/Food");
const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");

const getAllRestaurants = async(req,res) => {
    try
    {
        const restaurants = await Restaurant.find().limit(1000);

        if(restaurants)
        {
            res.json({"status":"success",restaurants})
        }
        else
        {
            res.json({"status":"error","message":"No data found"})
        }
    }
    catch(error)
    {
        res.json({"status":"error","message":error})
    }
}

const getAllFoods = async(req,res) => {
    try
    {
        const foods = await Food.find().limit(1000);

        if(foods)
        {
            res.json({"status":"success",foods})
        }
        else
        {
            res.json({"status":"error","message":"No data found"})
        }
    }
    catch(error)
    {
        res.json({"status":"error","message":error})
    }
}

const getAllMenus = async(req,res) => {
    try
    {
        const menus = await Menu.find().limit(1000);

        if(menus)
        {
            res.json({"status":"success",menus})
        }
        else
        {
            res.json({"status":"error","message":"No data found"})
        }
    }
    catch(error)
    {
        res.json({"status":"error","message":error})
    }
}

module.exports = {
    getAllRestaurants,
    getAllMenus,
    getAllFoods
}