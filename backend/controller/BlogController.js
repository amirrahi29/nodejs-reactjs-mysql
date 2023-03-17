const pool = require('../db/index');


const addBlog=async(req,res)=>{
    try {
        const {blog_title,blog_desc} = req.body;
        const[row,fields] = await pool.query("insert into blogs(blog_title,blog_desc) value(?,?)",[blog_title,blog_desc]);
        res.status(200).send({success:true,msg:"Blog added successfully"});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const updateBlog=async(req,res)=>{
    try {
        const {blog_title,blog_desc,blog_id} = req.body;
        const[row,fields] = await pool.query("update blogs set blog_title = ?, blog_desc = ? where blog_id = ?",[blog_title,blog_desc,blog_id]);
        res.status(200).send({success:true,msg:"Blog updated successfully"});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const allBlog=async(req,res)=>{
    try {
        const[row,fields] = await pool.query("select * from blogs");
        res.status(200).send({success:true,msg:"All blogs",data:row});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const singleBlog=async(req,res)=>{
    try {
        const {blog_id} = req.params;
        const[row,fields] = await pool.query("select * from blogs where blog_id = ?",[blog_id]);
        res.status(200).send({success:true,msg:"Blog details",data:row});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const deleteBlog=async(req,res)=>{
    try {
        const {blog_id} = req.params;
        const[row,fields] = await pool.query("delete from blogs where blog_id = ?",[blog_id]);
        res.status(200).send({success:true,msg:"Blog deleted successfully"});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports = {
    addBlog,
    allBlog,
    singleBlog,
    updateBlog,
    deleteBlog
}