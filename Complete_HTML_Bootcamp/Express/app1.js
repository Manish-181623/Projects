const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Express Stuff
// Forserving stati Files
app.use('/static', express.static('static'));
app.use(express.urlencodeed());

// PUG Stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.post('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'message': 'Your form has been submitted'}
    res.status(200).render('index.pug,params');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});