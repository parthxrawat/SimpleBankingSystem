const express = require("express");
const transactions = require("../models/transactionSchema");
const router = express.Router();
const user = require("../models/userSchema");

// Add a new user
router.post("/add", async (req, res) => {
  const {
    firstName,
    lastName,
    Phone,
    DOB,
    gender,
    Address,
    name,
    email,
    employment,
    accountType,
    amount,
  } = req.body;

  // Check if all required fields are provided
  if (
    !firstName ||
    !lastName ||
    !Phone ||
    !DOB ||
    !gender ||
    !Address ||
    !name ||
    !email ||
    !employment ||
    !accountType ||
    !amount
  ) {
    return res.status(400).json({ msg: "Please fill all the details" });
  }

  try {
    const newUser = new user({
      firstName,
      lastName,
      Phone,
      DOB,
      gender,
      Address,
      name,
      email,
      employment,
      accountType,
      amount,
    });

    await newUser.save();
    return res.status(201).json({ msg: "User added successfully", newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
});

// Get all customers
router.get("/customers", async (req, res) => {
  try {
    const users = await user.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
});

// Get a customer by ID
router.get("/customers/:id", async (req, res) => {
  try {
    const userData = await user.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
});

// Update money for a customer
router.put("/customer/money", async (req, res) => {
  try {
    const { id, count, id2 } = req.body;

    const user1 = await user.findById(id);
    const user2 = await user.findById(id2);

    if (!user1 || !user2) {
      return res.status(404).json({ msg: "One or both users not found" });
    }

    user1.amount -= count;
    user2.amount += count;

    await user1.save();
    await user2.save();

    return res.status(200).json({ msg: "Money updated successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Server error", error });
  }
});

// Add a transaction
router.post("/transactions", async (req, res) => {
  try {
    const { id, count, id2 } = req.body;

    const user1 = await user.findById(id);
    const user2 = await user.findById(id2);

    if (!user1 || !user2) {
      return res.status(404).json({ msg: "One or both users not found" });
    }

    const newTrans = new transactions({
      userOne: user1.name,
      userTwo: user2.name,
      amount: count,
    });

    await newTrans.save();
    return res.status(201).json({ msg: "Transaction added successfully", newTrans });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
});

// Get all transactions
router.get("/gettransactions", async (req, res) => {
  try {
    const data = await transactions.find();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
});

module.exports = router;
