const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs")


// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// forwards the createCard as the "homepage"
app.get("/", (req, res) => {
  
  res.render("createCard");
});

app.get("/express.js", (req, res) => {
  
  res.render("express.js");
});


app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});



