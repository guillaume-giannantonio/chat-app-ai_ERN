const dotenv = require("dotenv");

const express = require("express");
const axios = require("axios");
dotenv.config();
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const chatEngineResponse = await axios.get(
      "https://api.chatengine.io/users/me",
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": username,
          "User-Secret": password,
        },
      },
    );

    res.status(200).json({ text: chatEngineResponse.data.is_authenticated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const chatEngineResponse = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: password,
      },
      {
        headers: { "Private-Key": process.env.PRIVATE_KEY },
      },
    );

    res.status(200).json({ text: chatEngineResponse.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
