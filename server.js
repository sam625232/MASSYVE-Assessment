const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// SAM:  Replace with your MongoDB URI
const mongoUri =
  "mongodb+srv://admin-massyve:massyve123@assessment.eg3r0qe.mongodb.net/assessment?retryWrites=true&w=majority";

const secretKey = "my-secret-key";
// SAM:  Connect to MongoDB using Mongoose
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// SAM:  Create a Mongoose model for the user collection
const User = mongoose.model("logins", {
  username: { type: String },
  password: { type: String },
});

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    // SAM:  Find the user with the matching username and password in the database
    User.findOne({ username, password }, (error, user) => {
      if (error) {
        return res
          .status(500)
          .json({ error: "Error finding user in the database" });
      }
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // SAM:  If the username and password are found in the database, generate and return a JWT
      const token = jwt.sign({ username }, secretKey);
      // SAM:  Set the JWT in a cookie
      res.cookie("jwt", token);
      // SAM:  Send the JWT in the response
      res.json({ token });
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
