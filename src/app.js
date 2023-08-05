const express = require('express');
const exphbs = require('express-handlebars');
const indexRoutes = require('./routes/index.routes.js');
const path = require('path')
const morgan = require('morgan')

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

module.exports = app;
