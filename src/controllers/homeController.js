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
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // check user data not found

        //Display user
        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);

    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD
}