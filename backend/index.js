const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config();

const PORT = process.env.PORT || 7000;


//routers
const blog_router = require('./router/BlogRouter');
app.use('/api',blog_router);

app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`);
});



