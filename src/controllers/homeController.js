import { json } from 'body-parser';
import db from '../models/index'

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let getAboutPage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('test.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}