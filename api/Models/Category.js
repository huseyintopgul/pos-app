const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        title: { type: String, rquired: true },
    },
    { timestamps: true }
);

const Category = mongoose.model("category", CategorySchema);


module.exports = Category;
