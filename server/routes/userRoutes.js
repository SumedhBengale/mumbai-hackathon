const express = require('express');
const router = express.Router()

const { signup, login, logout, getLoggedInUserDetails} = require('../controllers/userController')
const {isLoggedIn} = require('../middleware/user')



router.route('/signup').post(signup);
router.route('/login').post(login);
router.route("/logout").get(logout);
router.route("/userdashboard").get(isLoggedIn, getLoggedInUserDetails);



module.exports = router;