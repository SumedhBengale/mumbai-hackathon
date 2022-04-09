const express = require('express');
const router = express.Router()

const { addProduct } = require('../controllers/problemcontroller')



router.route('/createproblem').post(addProduct);


module.exports = router;