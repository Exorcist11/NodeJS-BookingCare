# CÀI ĐẶT THƯ VIỆN
+ npm install body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1
+ npm install --save-dev @babel/core@7.12.10 @babel/node@7.12.10 @babel/preset-env@7.12.10 nodemon@2.0.7

#Cài đặt thư viện sequelize-cli
+ npm install --save-dev sequelize-cli  
+ npx sequelize-cli init : Khởi tạo sequelize
+ cd src
+ npm install --save sequelize@6.6.2 
+ node_modules/.bin/sequelize init        
+ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string : Khởi tạo đối tượng 
+ npm install --save mysql2@2.2.5 : Cài đặt thư viện mysql2
+ npx sequelize-cli db:migrate : Kết nối cơ sở dữ liệu
+ npx sequelize-cli seed:generate --name demo-user : Tạo demo user
+ npx sequelize-cli db:seed:all : Chạy sequelize

#Đổi version nodejs: nvm use 19.5.0 (02/02/2023)
#Danh sách version nodejs: nvm list
