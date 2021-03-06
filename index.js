const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);
//* ROUTES */
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();

app.use(bodyParser.json());//To be able to parse the body of a post request
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//* Call the routes passing it the app */
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

//Grant that Express behaves correctly when in prod
if (process.env.NODE_ENV === 'production') {
    //Expres will serve up production assets like
    // our main.js file, or main.css file!
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);