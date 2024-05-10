const express = require("express");
const { getDb, connectToDb } = require("./db");

// init app & middleware
const app = express();

// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen("5000", () => {
      console.log("app listening on port 5000");
    });
    db = getDb();
  }
});

// routes
app.get("/vehicle", (req, res) => {
  let books = [];

  db.collection("first")
    .find()
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});
