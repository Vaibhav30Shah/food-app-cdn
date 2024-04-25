const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {   
        item: { type: String },

        veg_or_non_veg: { type: String }
    },
    { timestamps: false }
);

const Food = mongoose.models.food || mongoose.model("foods", foodSchema);

module.exports = mongoose.model("Food", foodSchema);