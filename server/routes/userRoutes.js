const express = require('express');
const router = express.Router()

const { signup, login, update, remove } = require('../controllers/userController')

router.route('/signup').post(signup);
router.route('/login').post(login);

module.exports = router;