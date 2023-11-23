// import express from 'express';

const express = require('express');
const app = express();
app.use(express.json())
const bodyParser = require("body-parser");
const fs = require('fs');

const path = require('path')
const cors = require('cors');
app.use(cors());

const multer = require("multer")

//storage engine

const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null,'./upload/images')
    },
    filename: (req,file,cb)=>{
        return cb(null,file.originalname)
    }
})

const upload = multer({
    // dest:'./upload/images'
    storage:storage,
    limits: { fileSize: 1000000 } 
})



// app.use('/profile', express.static('upload/images'));


function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {app.use(cors());
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler);
app.use(bodyParser.json())

const PORT = 8080;


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

const data = require("./data.json");

app.get('/countries', (req, res) => {
    try{
        const countryNames = data.continents.map(continent => continent.countries.map(country => ({ id: country.id, name: country.name, image:country.image })));
        const allCountries = [].concat(...countryNames);
        res.send(allCountries);
}
    catch(err)
    {
        console.error("An error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});
app.get('/continents', (req, res) => {
    try{
        const continentNames = data.continents;
         res.send(continentNames)
}
    catch(err)
    {
        console.error("An error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});
app.get('/country', (req, res) => {
    try{
        const countryNames = data.continents.map(x => x.countries.map(y=>y.name)).flat();
         res.send(countryNames)
}
    catch(err)
    {
        console.error("An error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/countries/:id', (req, res) => {
    const Id = parseInt(req.params.id);
    let ele;
   try{
    const countryInfo = data.continents.flatMap(x => x.countries.filter(country =>{ 
        if(country.id === Id)
        { ele = country}
        return country.id == Id
    }));
    res.json(countryInfo)
    console.log(countryInfo)}
    catch(err){
        console.error("An error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
    
});


app.post('/addContinents', upload.single('image'),(req, res) => {
    try {
        const {
            name,
            id,
            rank,
            selectedContinent
        } = req.body;
        const  image = req.file.originalname
        
        data.continents.forEach((info) => {
            if (info.name == selectedContinent) {
                
                info.countries.push({
                    name,
                    id,
                    rank,
                    image
                });
         
     fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
 
            }
        });
   
        res.send({message:'Country added successfully',country:{name,id,rank}});
      
    } catch (error) {
        console.error("An error has occurred while uploading: ", error);
        res.status(500).send("Internal Server Error");
    }
});
