const 
    express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),

    bodyParser = require('body-parser'),
    registerRoute = require('./routes/register'),
    loginRoute = require('./routes/login'),
    inputRoute = require('./routes/input'),
    resultRoute= require('./routes/result');

const app = express();
const { User } = require('./models');
const port = process.env.PORT || 3000;
// =============================================================
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: "Saare jahaan se Acha Hindustaan hamaara",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// =============================================================
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// =============================================================
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/input", inputRoute);
app.use("/result", resultRoute);
// =============================================================
app.get("/", (req, res) => res.render('landing',{}));
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
})
// =============================================================
app.listen(port, () => console.log('Server Online!'));
