const router = require("express").Router();
const user = require('../Controllers/User');



router.post("/Register",user.UserRegistration);

module.exports = router;
