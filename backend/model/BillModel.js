const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    bill_type: {
      type: String,
      required: true,
    },
    issue_date: {
      type: String,
      required: true,
    },
    last_date: {
      type: String,
      required: true,
    },
    invoice: {
      type: String,
      required: true,
    },
    payment_status: {
      type: Boolean,
      default: false,
    },
    total_bill: {
      type: Number,
      required: true,
    },
    bill_details: {
      type: String,
      required: true,
    },
    bill_details_id: {
      type: String,
      required: true,
    },
    bill_issue_students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
      },
    ],
    createdAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bill", billSchema);
