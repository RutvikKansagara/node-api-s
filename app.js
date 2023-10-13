const express = require("express");

const app = express();

const dotenv = require("dotenv").config();
const connectToMongoDb = require("./config/db");


const userRoutes = require("./routes/userRoutes");
const mysqlUserRoutes = require("./mysql-crud-api/mysqlRoutes/userRoutes");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

connectToMongoDb();

app.use("/",userRoutes);
app.use("/mysql",mysqlUserRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});