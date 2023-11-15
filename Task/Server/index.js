const express = require('express');
const fs = require('fs');
const path = require('path')
const multer = require('multer')
const PORT = 8080;
const app = express();
app.use(express.json())
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        const dest = './Images';
        fs.mkdir(dest,{recursive:true},(err) => {
            if(err){
                cb(err,null);
            }else{
                cb(null,dest);
            }
        })
    },
     filename:(req,file,cb) => {
        console.log(file)
        cb(null,Date.now() + path.extname(file.originalname))
     }
})
const upload = multer({
    storage: storage,
    limits:{fileSize: 4 * 1024 * 1024},
    fileFilter: (req,file,cb) => {
        const fileTypes = /jpeg|jpg|png/; //regex used
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if(mimeType && extname){
            return cb(null,true)
        }else{
            cb("Error: Image with particular Filetype only allowed!")
        }
    }
})
app.listen(PORT,() => 
    console.log(`Running this application on the PORT ${PORT}`)
);
app.use(express.json());
const data = require('./db.json');
app.get('/getRequest',(req,res) => {
    res.send("Hello there!")
})
app.get('/continents', (req, res) => {
    const continents = data.continents;
    res.json(continents);
  });  
app.get('/countries', (req, res) => {
  const countries = data.continents.map((continent) => continent.countries.map((country) => (country.name)))  
const countriess = data.continents.map((continent) => continent.countries.map((country) => country.name)).flat();
  console.log(countriess)
  res.json(countriess);
});
app.get('/countries/:id',(req,res) => {
      const { id } = req.params
      let ele;
    const cid = data.continents.map((continent) => {
         continent.countries.filter((country) => {
            if(country.id == id ){ ele = country }
            return country.id == id
        })
    }
        )
    res.json(ele);
})
app.get('/countriess', (req, res) => {
    const cd = data.continents.flatMap((continent) => 
        continent.countries.map((country) => ({
            name: country.name,
            id: country.id,
            image: country.image,
            rank: country.rank
        }))
    );
    res.json(cd);
});
app.post('/countries', upload.single("image") ,(req,res) => {
    console.log("hii" + req.body.countryName)
const {
        name,
        id,
        rank
    } = req.body;
    const image = req.file;
    if(!name || !id || !rank || !image){
        console.log({message: 'Name,id,rank, & image are required'})
       return res.status(400).json({message: 'Name,id,rank, & image are required'})
        
    }else{
        const selectedContinentIndex = data.continents.findIndex(continent => continent.name === req.body.selectedContinent);
        if(selectedContinentIndex !== -1){
            data.continents[selectedContinentIndex].countries.push({name,id,rank,image});
   fs.writeFileSync('db.json',JSON.stringify(data,null,2));
   console.log({name,id,rank,image})
   return res.json({message:'Country added successfully',country:{name,id,rank,image}})
   
}else{
    return res.status(404).json({message:'Selected Continent not found'})
}
    }
}
)

