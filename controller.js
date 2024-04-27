const Food = require("./models/Food");
const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");

const getAllRestaurants = async(req,res) => {
    try
    {
        const restaurants = await Restaurant.find();

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
        const foods = await Food.find();

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
        const menus = await Menu.find();

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

const getAllMenusByResturant = async(req,res) => {
    try
    {
        console.log(req.params.id);
        const menus = await Menu.find({id:req.params.id});

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

const getFoodItemsByMenuId = async(req,res) => {
    try
    {
        console.log(req.params.id);
        const menus = await Menu.find({id:req.params.id});

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

  const getAllRestaurantsByCuisine = async(req,res) => {
    try
    {
        console.log(req.params.cuisine);
        const menus = await Restaurant.find({cuisine:req.params.cuisine});

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
    getAllFoods,
    getAllMenusByResturant,
    getFoodItemsByMenuId,
    getAllRestaurantsByCuisine,
}