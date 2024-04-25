const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
    {
        menu_id:{type : String},

        f_id: { type: String, ref: "Food"},

        cuisine: { type: String },

        rest_id: { type: Number, ref: "Restaurant"},

        price: {type: Number}
    },
    { timestamps: false }
);

const Menu = mongoose.models.menu || mongoose.model("menus", menuSchema);

module.exports = mongoose.model("Menu", menuSchema);