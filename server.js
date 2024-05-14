const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();

// Serve static files (images, CSS, JavaScript, etc.) from the 'public' directory
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/views', express.static(path.join(__dirname, 'views')));


const indexController = require('./controllers/indexControllers');
const contactController = require('./controllers/contactControllers');
const knowledgeController = require('./controllers/knowledgeControllers');
const krongkarnControllers = require('./controllers/krongkarnControollers');
const loginControollers = require('./controllers/loginController');
const ProductController = require('./controllers/ProductController');
const RaiCafeController = require('./controllers/RaiCafeControllers');
const RegisterController = require('./controllers/RegisterControllers.js');

const index2Controller = require('./controllers/index2Controller');
const contact2Controller = require('./controllers/contact2Controllers');
const knowledge2Controller = require('./controllers/knowledge2Controllers');
const krongkarn2Controllers = require('./controllers/krongkarn2Controollers');
const Product2Controller = require('./controllers/Product2Controller');
const RaiCafe2Controller = require('./controllers/RaiCafe2Controllers');

app.set('view engine', 'ejs')

// Define routes for your HTML pages
app.get('/', indexController)
app.get('/contact', contactController)
app.get('/Knowledge', knowledgeController)
app.get('/Krongkarn', krongkarnControllers)
app.get('/login', loginControollers)
app.get('/Product', ProductController)
app.get('/RaiCafe', RaiCafeController)
app.get('/register', RegisterController)
app.get('/index2', index2Controller)
app.get('/contact2', contact2Controller)
app.get('/Knowledge2', knowledge2Controller)
app.get('/Krongkarn2', krongkarn2Controllers)
app.get('/Product2', Product2Controller)
app.get('/RaiCafe2', RaiCafe2Controller)


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
