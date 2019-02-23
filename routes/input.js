const express = require('express');
const fs = require('fs');
const router = express.Router();

// =============================================================

router.get("/", isLoggedIn, (req,res) => {
    res.render('input', {});
});

router.post("/", isLoggedIn,async (req, res) => {
    req.body.Loan_ID = "LP8086";
    const ip = convertToCSV(req.body);
    fs.writeFileSync('public/input.csv', ip, err => console.log(err));

    res.redirect("/result");
});

// =============================================================
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

function convertToCSV(obj) {
    
    const keys = Object.keys(obj);
    const vals = Object.values(obj);
    let str1='', str2='';
    keys.forEach(key => {
        str1 += key;
        str1 += ',';
    });

    vals.forEach(val => {
        str2 += val;
        str2 += ',';
    });
    str1 = str1 + '\n' + str2;
    return str1;
}

// =============================================================
module.exports = router;
