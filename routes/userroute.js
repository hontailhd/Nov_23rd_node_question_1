const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const database = require("../database.json/")


//welcome page localhost:3002
router.get("/", async (req, res) => {
  res.send("welcome");
  const userID = process.env.userID;
  const query = "";
  const url = '';
  const data = await fetch(url);
  const database = await database.json();
  console.log(database);
});


//unfinished code for accessing the database
const getUserByID = (userID) => {
  let current_id = database.users.id
  if (userID == current_id {a
    return 
  }

}



//if ensureAuthenticated gives permission then the code will run
//reminders page  localhost:3002/reminders
router.get("/reminders", ensureAuthenticated, (req, res) => {
  res.render("reminders", {
    user: req.user,
  });
});

module.exports = router;
