const http = require("http");
const router = require("./routes/blogRoutes");

const dotenv = require("dotenv").config();

const server = http.createServer((req, res) => {
    router(req,res);
});
 

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running`);
});