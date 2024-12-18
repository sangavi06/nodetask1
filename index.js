const express =require('express');
const dotenv=require('dotenv');
const path=require("path")
dotenv.config()
const fs=require("fs")

const app=express();

const PORT=process.env.PORT || 3000;
const folderPath = path.join(__dirname, "TimeFiles");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
if (!fs.existsSync(`${__dirname}/TimeFiles`,err=>{
    if(err){
        return err
    }
})){
    fs.mkdir(`${__dirname}/TimeFiles`,err=>{
        if(err){
            return err
        }
    }); 

}   

   

app.get('/createfile',(req,res)=>{
    let date = new Date();
    let filename = `${date.toISOString()}.txt`;
    let data="current date and time is "+date.toISOString();
    fs.writeFile(`${__dirname}/TimeFiles/${filename}`,data,(err)=>{
        console.log(err);
    });
    res.send("Timefiles are successfully created")
})
app.get("/getfile", (req, res) => {
    let files = fs.readdirSync("./TimeFiles");
    console.log(files);
    res.send(files);
  });
  

app.listen(PORT,()=>
    console.log("server is runninng")
)