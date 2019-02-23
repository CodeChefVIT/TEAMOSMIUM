const express = require('express');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();
// =============================================================
router.get("/", (req, res) => {
    res.render('register', {});
});

router.post("/", (req, res) => {
    User.register(new User({username: req.body.username}),
    req.body.password, (err,user) => {
        if(err) {
            console.log(err);
            res.redirect("/error");
        }
        else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/input");
            });
        }
    });
});
// =============================================================
module.exports = router;