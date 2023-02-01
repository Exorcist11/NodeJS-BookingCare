import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRouters from "./route/web"
import connectDB from "./config/connectDB"
require('dotenv').config();
//Khai báo biến truy cập thư viện express
let app = express();
//Sử dụng thư viện bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRouters(app);

connectDB();

let port = process.env.PORT || 2077;
//Kiểm tra kết nối .env PORT
app.listen(port, () => {
    console.log("Backend NodeJS is running on the port: " + port);
})