const express = require('express');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();
// =============================================================
router.post('/', passport.authenticate('local', {
    successRedirect: '/input',
    failureRedirect: '/login',
}),
(req, res) => {

});
// =============================================================
module.exports = router;
