const express  = require('express');
const mongoConnect = require('./utils/database').mongoConnect;
const bodyParser = require('body-parser');
const cors=require('cors')
require('dotenv').config();
const bcryptjs = require('bcryptjs');

const retrieveRoutes = require('./routes/retrieveRoutes');
const editRoutes = require('./routes/editRoutes');
const searchRoutes = require('./routes/searchRoutes');
const loginRoutes = require('./routes/loginRoutes.js');

app = express();
app.use(cors());
// app.use(cors({
//     origin: ["https://tu-searchable-dir-my.vercel.app","https://tu-searchable-dir-my.vercel.app/"],
//     methods: ["POST", "GET","post","get"],
//     credentials: true
// }));


 
const PORT = 7000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE,OPTION');
    res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
    next();
});


app.use(bodyParser.json());

app.use(searchRoutes);
app.use(editRoutes);
app.use(retrieveRoutes);
app.use(loginRoutes);

mongoConnect(() => {
})

app.listen(PORT);

