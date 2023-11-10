const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const fs = require('fs');
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,'./upload/images')
    },
    filename : (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

app.post("/upload",upload.single('profile'),(req,res)=>{
    try{
        console.log("hii " + req);
    }catch(error){
        console.error("error",error);
    }
    
})

app.use(bodyParser.json()); 

app.listen(
    PORT,() => console.log(`Server is running on Port ${PORT}`)
);

const data = require('./JSON/data.json');

app.get('/getData',(req,res) => {
    const result = data.continents;
    res.send(result);
})


app.get('/getCountry', (req, res) => {
    const result = data.continents.map(element => element.countries.map(ele => ele.name)).flat();
    res.send(result);
});

app.get('/countries',(req,res)=>{
    try{
        console.log("success");
         const result = data.continents.map(element => element.countries.map((ele) => ({
            id:ele.id,
            name:ele.name
         })));
         res.send(result);
         } catch (error) {
            console.error("An error occurred:", error);
        }
});
app.get('/countries/:id', (req, res) => {
    let { id } = req.params;
    let countryInfo;
    try {
        console.log("success");
        const result = data.continents.map(element => element.countries.filter((ele) => {
            if (ele.id == id) 
            {
             countryInfo = ele
            }
            return ele.id == id;
        }));
        res.send(countryInfo);
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

app.post('/post',(req,res)=>{
    try{
        const {
            name,
            id,
            rank,
            image,
            selectedContinent
        } = req.body;
        data.continents.forEach((ele)=>{
            if(ele.name==selectedContinent){ 
                ele.countries.push({name,id,rank,image});
                fs.writeFileSync('./JSON/data.json',JSON.stringify(data,null,2));
                res.send({message:'country added ', country:{name,id,rank,image}});
            }
        })
        
      
       res.send("this is the post request");
    }catch(error){
        console.error("An error has occured while uploading: ",error);
    }
});
