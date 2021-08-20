# 美食筆記
一個紀錄美食餐廳的網站！使用者可以新增餐廳資訊，並在首頁一覽儲存的餐廳類別與評價分數以找到心儀的餐廳，也可以自由選擇查看餐廳的詳細介紹與聯絡資訊。

# 功能列表
* 新增喜愛的餐廳資訊，可以建立並管理專屬的一個餐廳清單
* 依照餐廳名稱搜尋
* 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map等
* 點選"我的餐廳清單"返回首頁瀏覽全部餐廳資料
* 使用者可以註冊帳號，且密碼經過雜湊處理，註冊的資料包括：名字、email、密碼、確認密碼。其中 email 與密碼是必填欄位，但名字不是
* 使用者必須登入才能使用餐廳清單，如果沒登入，會被導向登入頁面
* 使用者也可以透過 Facebook Login 直接登入
* 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息


# 啟動方式
* 將專案clone到本地端
```
git clone https://github.com/a1234567045/restaurant-modify.git
```
* 進入到專案資料夾後，安裝packages
```
cd restaurant-list-A6
npm install
```
* 建立種子資料，並透過nodemon啟動專案
```
npm run seed
nodemon app.js
```
* 在terminal可以看到 Express is listening on localhost : 3000，然後開啟瀏覽器在網址列輸入localhost:3000


# 開發環境
* Node.js: v10.15.0
* Express: v4.17.1
* Express-Handlebars: v5.3.0