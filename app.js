const 
    express = require('express'),
    bodyParser = require('body-parser'),
    loginRoute = require('./routes/login'),
    inputRoute = require('./routes/input'),
    resultRoute= require('./routes/result');

const app = express();
const port = process.env.PORT || 3000;
// =============================================================
app.use(bodyParser.urlencoded({extended: true}));
// =============================================================
app.get("/", (req,res) => res.send("Hi There!!!"));
app.use("/login", loginRoute);
app.use("/input", inputRoute);
app.use("/result", resultRoute);
// =============================================================
app.listen(port, () => console.log('Server Online!'));