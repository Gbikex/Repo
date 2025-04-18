import express from "express";
import bodyParser from "express"
import path from "path"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs")
})

app.post("/submit",(req,res)=>{

 const blogPost = {

  blogTitle:req.body.blogTitle,
  blogContent: req.body.blogPost,
 }
 console.log(blogPost);
 
 res.render("index.ejs",blogPost);

})

app.listen(port, (error)=>{
  if (!error){
    console.log(`App is running on port: ${port}`)
  }else{
    console.log("Error occurred, server is down",error)
  }
})
//