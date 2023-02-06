import express from "express";
import homeController from "../controllers/homeController";
//Khai báo biến router sử dụng điều hướng
let router = express.Router();

let initWebRoutes = (app) => {
    //Sử dụng get để lấy thông tin
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;