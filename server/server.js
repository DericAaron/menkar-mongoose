
//requires
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//uses
app.use(bodyParser.urlencoded({extended: true}));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server listening on', PORT);
});
