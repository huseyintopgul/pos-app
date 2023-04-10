const express = require("express");
const router = express.Router();
const Invoice = require("../Models/Invoice");

// POST işlemi

router.post("/add-invoice", async (req, res) => {
    try {
        const newInvoice = new Invoice(req.body);
        await newInvoice.save();
        res.status(200).json("yeni fatura eklendi");
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// GET-ALL işlemi

router.get("/get-all-invoices", async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices)
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// GET işlemi

router.get("/get-invoice", async (req, res) => {
    try {
        const invoice = await Invoice.find({_id: req.body.id});
        res.status(200).json(invoice)
    }
    catch (error) {
        res.status(400).json(error)
    }
});


module.exports = router;