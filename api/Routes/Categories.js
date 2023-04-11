const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");

// POST işlemi

router.post("/add-category", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("İşlem başarılı");
    }
    catch (error) {
        res.status(400).json(error);
    }
});

// GET-ALL işlemi

router.get("/get-all-categories", async (req, res) => {
    try {
        const categories = await Category.find().sort({
        })
        res.status(200).json(categories)
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// GET işlemi

router.get("/get-category", async (req, res) => {
    try {
        const category = await Category.find({_id: req.body.categoryId});
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json(error)
    }
})

// PUT işlemi

router.put("/update-category", async (req, res) => {
    try {
        await Category.findByIdAndUpdate({ _id: req.body.categoryId },
            req.body);
        res.status(200).json("Kategori güncellendi.")
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// DELETE işlemi

router.delete("/delete-category", async (req, res) => {
    try {
        await Category.findByIdAndDelete({ _id: req.body.categoryId });
        res.status(200).json("Kategoriniz silindi!")
    }
    catch (error) {
        res.status(400).json("Kategoriniz Silinemedi!")
    }
})


module.exports = router;



