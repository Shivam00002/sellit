const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config(); // Make sure you have dotenv installed.

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sellit",
});

db.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to our Website");
});

app.post("/signup", (req, res) => {
  const sqlData = [req.body.Email, req.body.Password];
  const sql = "INSERT INTO `signup` (`email`, `password`) VALUES (?, ?)";
  db.query(sql, sqlData, (error, result) => {
    if (error) {
      console.error("Error occurred:", error);
      return res.status(500).json({ error: "Error occurred while signing up" });
    } else {
      return res.json(result);
    }
  });
});

app.get("/signup", (req, res) => {
  const sql = "SELECT * FROM signup";
  db.query(sql, (error, result) => {
    if (error) {
      console.error("Error occurred:", error);
      return res
        .status(500)
        .json({ error: "Error occurred while fetching data" });
    } else {
      return res.json(result);
    }
  });
});

app.get("/signup/:id", (req, res) => {
  const userID = req.params.id;
  const sql = "SELECT * FROM signup WHERE email = ?";
  db.query(sql, userID, (error, result) => {
    if (error) {
      console.error("Error occurred:", error);
      return res
        .status(500)
        .json({ error: "Error occurred while fetching data" });
    } else {
      return res.json(result);
    }
  });
});

app.post("/products", (req, res) => {
  let sqlData = [
    req.body.Title,
    req.body.Price,
    req.body.Quantity, // Corrected field name
    req.body.Productdec,
  ];

  let sql =
    "INSERT INTO `produtsdata`( `title`, `price`, `quantity`, `description`) VALUES ( ? , ? , ? ,? )";

  db.query(sql, sqlData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result);
    }
  });
});

app.get("/products", (req, res) => {
  let sql = "SELECT * FROM produtsdata";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result);
    }
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const sql = "DELETE FROM `produtsdata` WHERE `id` = ?";

  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the product." });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Product not found." });
      } else {
        return res
          .status(200)
          .json({ message: "Product deleted successfully!" });
      }
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
