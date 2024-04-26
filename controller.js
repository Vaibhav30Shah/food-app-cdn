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

const getFoodItemsByMenuId = async (req, res) => {
    try {
      const menuId = req.params.id; // Get the menu ID from the request parameters
  
      // Find the menu by its ID
      const menu = await Menu.findById(menuId);
  
      if (menu) {
        // Get the foodIds from the menu document
        const foodIds = menu.f_id; // Assuming you have a field called 'f_id' in the Menu model
  
        // Find the food items by their IDs
        const foodItems = await Food.find({ _id: { $in: foodIds } });
  
        res.json({ "status": "success", foodItems });
      } else {
        res.json({ "status": "error", "message": "No menu found with the provided ID" });
      }
    } catch (error) {
      res.json({ "status": "error", "message": error });
    }
  };

module.exports = {
    getAllRestaurants,
    getAllMenus,
    getAllFoods,
    getAllMenusByResturant,
    getFoodItemsByMenuId,
}