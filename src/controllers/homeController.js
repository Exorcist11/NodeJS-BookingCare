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
let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD
}