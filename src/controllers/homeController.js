import { json } from 'body-parser';
//Thực hiện lấy database từ file index
import db from '../models/index'

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
// async khai báo biến đồng bộ
// await tạm dừng thực hiện hàm async
let getAboutPage = async (req, res) => {
    try {
        let data = await db.User.findAll(); //Khai báo biến data
        return res.render('test.ejs', {
            data: JSON.stringify(data) // Hiển thị data lên website
        });
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}