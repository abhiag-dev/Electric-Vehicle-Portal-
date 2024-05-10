const express = require("express");
const router = express.Router();
const Vehicle = require("./vehicle");
const mongoose = require("mongoose");

router.get("/api/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/api/vehicles", async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);

    const savedVehicle = await newVehicle.save();

    res.status(201).json(savedVehicle);
  } catch (error) {
    console.error("Error adding vehicle:", error);
    res.status(500).json({ error: "Failed to add vehicle" });
  }
});

mongoose.connect("mongodb://localhost:27017/vehicle", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log connection events
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

module.exports = {
  router,
};
