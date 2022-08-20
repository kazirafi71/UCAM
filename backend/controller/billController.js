const BillModel = require("../model/BillModel");
const cloudinary = require("../middleware/cloudinary");

module.exports.createBill__controller = async (req, res, next) => {
  try {
    const {
      bill_type,
      issue_date,
      last_date,
      invoice,
      payment_status,
      total_bill,
      bill_details,
      bill_issue_students,
    } = req.body;

    if (
      !bill_type ||
      !issue_date ||
      !last_date ||
      !invoice ||
      !payment_status ||
      !total_bill ||
      !bill_issue_students
    ) {
      return res
        .status(404)
        .json({ error: "Please enter required information's" });
    }

    let bill_details_path;
    if (req.file) {
      bill_details_path = await cloudinary.uploader.upload(req.file.path, {
        folder: "ucam/bill_details",
      });
    }

    console.log(JSON.parse(JSON.parse(bill_issue_students)));

    const newBill = new BillModel({
      bill_type,
      issue_date,
      last_date,
      invoice,
      payment_status,
      total_bill,
      bill_details: bill_details_path?.secure_url,
      bill_details_id: bill_details_path?.asset_id,
      bill_issue_students: JSON.parse(bill_issue_students),
      createdAt: req.admin._id,
    });

    console.log(newBill);

    // await newBill.save();
    // return res.status(201).json({ success: "New bill added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Something went wrong" });
  }
};
