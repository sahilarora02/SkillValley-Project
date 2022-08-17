const router = require("express").Router();
const user = require('../Controllers/User');



router.post("/Register",user.UserRegistration);
router.post("/Login",user.Login);

module.exports = router;
