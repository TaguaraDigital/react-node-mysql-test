const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 4500);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// Routes
app.use(require('./router/index.route'))
app.use(require('./router/recibos.route'))
app.use(require('./router/pagos.route'))

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting Server
app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`)
})