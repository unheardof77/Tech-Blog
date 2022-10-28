const path = require(`path`);
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const sequelize = require(`./config/connection`);
const session = require(`express-session`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);
const controller = require(`./controllers`);
const helpers = require(`./utils/helper/helper`);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine(`handlebars`, hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set(`view engine`, `handlebars`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controller);

sequelize.sync({force: false}).then(() =>{
    app.listen(PORT, () => console.log('Now listening'));
});