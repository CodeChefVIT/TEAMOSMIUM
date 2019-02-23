const express = require('express');
const router = express.Router();
// =============================================================
router.get("/", (req, res) => {
    res.send("This is the results page");
});
// =============================================================
module.exports = router;