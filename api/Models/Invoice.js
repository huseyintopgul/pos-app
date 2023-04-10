const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema(
    {
        customerName: { type: String, require: true },
        customerPhoneNumber: { type: String, require: true },  // matematiksel işlemler gerçekleştirmeyeceğimiz için "type-String" olarak giriyoruz
        paymentMod: { type: String, required: true },
        cartItems: { type: Array, require: true },
        subTotal: { type: Number, required: true },
        tax: { type: Number, required: true },
        totalAmount: { type: Number, required: true },

    },

    { timestamps: true }
);

const Invoice = mongoose.model("invoices", InvoiceSchema);



module.exports = Invoice;
