# Amazona: An ECommerce Website like Amazon.com

Demo : https://amazonaapp.herokuapp.com/

## Table of Conent

- Video-01-Intro
- Video-02-Install-VSCode-Chrome
- Video-03-Website-Template
- Video-04-Product-List
- Video-05-Sidebar
- Video-06-Create-React-App
- Video-07-Render-Products-Array
- Video-08-React-Router-Product-Details
- Video-09-Create-Node-Express-Server
- Video-10-Fetch-Server-Data-Using-React-Hooks
- Video-11-Manage-State-With-Redux
- 14 - Connect to mongoDB
    - create .env file and set MONGODB_URL to mongodb://localhost/mongo/db
    - create config.js and set MONGODB_URL
    - npm install dotenv and import it add dotnev.config
    - Import config
    - use config.MONGODB_URL
    - npm install mongoose
    - mongoose.connect(url, {newParser: true}).catch(err => console.log(err.reason))

- 15-Signin-Users
  - userRoute post findOne {_id, ... , token: getToken(user)}
  - util getToken jwt.sign({user}, config.JWT_SECRET, {expiresIn:'48h'})
  - isAuth token = req.headers.authorization token.slice(7, token.length)
  - jwt.verify(token, config.JWT, (err, decode)=> { req.user = decode; next()})

- 16-Manage-Products-Screen
  1. isAuth token = req.headers.authorization token.slice(7, token.length)
  2. Create ProductsScreen.js and add to Add Route to App.js
  3. product list 
  4.  Define State for id, name, brand, category, image, price, countInStock, description

- 17-Checkout-Wizard-Screen
- 18-Create-Order  