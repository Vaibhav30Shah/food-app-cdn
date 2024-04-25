const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {  
        f_id: {type: String},
         
        item: { type: String },

        veg_or_non_veg: { type: String }
    },
    { timestamps: false }
);

const Food = mongoose.models.food || mongoose.model("foods", foodSchema);

module.exports = mongoose.model("Food", foodSchema);