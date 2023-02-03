import { json } from 'body-parser';
//Thực hiện lấy database từ file index
import db from '../models/index'
import CRUDService from '../services/CRUDService';

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
// async khai báo biến đồng bộ
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('AIZ');
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}