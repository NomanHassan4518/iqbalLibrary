const express = require("express");
const app = express();
let cors = require("cors");
const multer = require("multer");

require("./db/config");
let User = require("./db/user");
let TopBook = require("./db/topbook");
let Book = require("./db/book")

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, "./files");
  },
  filename: function (req, file, cb) {  
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use("/files", express.static("files"));

app.get("/", (req, res) => {
  res.send("api is properly working ");
});

app.post("/signup", async (req, resp) => {
  let user = User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password"); 
    if (user) {
      res.send(user);
    } else {
      res.send("User not found!");
    }
  } else {
    res.send("User not found!");

    
  }
});

app.post("/uploadbook", upload.single("pdfBook"), async (req, res) => {
  let title = req.body.title;
  let desc = req.body.desc;
  let stock=req.body.stock
  let price = req.body.price;
  let category = req.body.category; 
  let imgURL = req.body.imgURL;
  let filename = req.file.filename

  try {
    await Book.create({title:title,desc:desc,stock:stock,price:price,category:category,imgURL:imgURL,pdfBook:filename})
    res.send({satatus:"OK"})
  } catch (error) {
    res.json(error)
  }
});

app.get("/topbooks", (req, res) => {
  TopBook.find({}).then((data) => {
    res.send({ status: "ok", data: data });
  });
});

app.get("/books", (req, res) => {
  Book.find({}).then((data) => {
    res.send({ status: "ok", data: data });
  });
});



app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;
