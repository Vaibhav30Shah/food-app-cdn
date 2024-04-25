const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        id: {type: Number},
        
        address: { type: String },

        city: { type: String },

        cuisine: { type: String },

        name: { type: String },

        rating: { type: Number },

        rating_count: { type: String },

        cost: {type: Number}
    },
    { timestamps: false }
);

const Restaurant = mongoose.models.restaurant || mongoose.model("restaurants", restaurantSchema);

module.exports = mongoose.model("Restaurant", restaurantSchema);