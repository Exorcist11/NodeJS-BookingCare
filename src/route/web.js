import express from "express";
import homeController from "../controllers/homeController";
//Khai báo biến router sử dụng điều hướng
let router = express.Router();

let initWebRoutes = (app) => {
    //Sử dụng get để lấy thông tin
    router.get('/', homeController.getHomePage);
    router.get('/L', homeController.getAboutPage)
    return app.use("/", router);
}

module.exports = initWebRoutes;