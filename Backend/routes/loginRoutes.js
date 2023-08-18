
const express = require('express');

const auth = require('../handlers/authHandler')


const router = express.Router();

router.post(':7000/login/', auth.loginHandler);

router.post(':7000/signup/', auth.signupHandler);

router.post(':7000/adminsignup/', auth.adminsignupHandler);
module.exports = router;