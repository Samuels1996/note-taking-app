const express = require('express');

const apiRoute = require('./routes/apiRoute');

const htmlRoute = require('./routes/htmlRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`);
});