const express = require('express');
const blog_router = express();

const bodyParser = require('body-parser');
blog_router.use(bodyParser.json());
blog_router.use(bodyParser.urlencoded({extended:true}));


//controller
const blogController = require('../controller/BlogController');

//routes
blog_router.post('/addBlog',blogController.addBlog);
blog_router.post('/updateBlog',blogController.updateBlog);
blog_router.get('/allBlog',blogController.allBlog);
blog_router.get('/allBlog/:blog_id',blogController.singleBlog);
blog_router.get('/deleteBlog/:blog_id',blogController.deleteBlog);

module.exports = blog_router;
