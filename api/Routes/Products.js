const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

// POST İşlemi

router.post("/add-product", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json("Yeni ürün eklendi.")
    }
    catch (error) {
        res.status(400), json(error)
    }
});

// GET ALL işlemi

router.get("/get-all-products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});

// GET işlemi

router.get("/get-product", async (req, res) => {
    try {
        const product = await Product.find({ _id: req.body.productId });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json(error)
    }
})

// PUT işlemi 

router.put("/update-product", async (req, res) => {
    try {
        await Product.findByIdAndUpdate({ _id: req.body.productId }, req.body);
        res.status(200).json("Ürününüz güncellendi")
    }
    catch (error) {
        res.status(400).jason(error)
    }
});

// DELETE işlemi

router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.body.productId });
        res.status(200).json("Ürün başarılı bir şekilde silinmiştir.")
    }
    catch (error) {
        res.status(400).json(error)
    }
});




module.exports = router;