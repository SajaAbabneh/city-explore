'use strict';

const express= require('express');
require('dotenv').config();

const cors=require('cors');

const server=express();

const PORT = process.env.PORT || 4000;

server.use(cors());

server.get('/',(req,res) => {
    // let locData=require('./data/location.json');
    res.send('Done');
})

server.get('/location',(req,res) => {
    let locData=require('./data/location.json');
    res.send('DDDDDDDOne');
    // console.log(locData);

    let locationData=new Location(locData);
    console.log(locationData);
    // res.send(locationData);

})

function Location(loccData){
   
    this.search_query='Lynnwood';
    this.formatted_query=loccData[0].display_name;
    this.latitude=loccData[0].lat;
    this.longitude=loccData[0].lon;

}


server.get('*',(req,res)=>{
  
    let errObj = {
        status: 500,
        responseText: "Sorry, something went wrong"
    }
    res.status(500).send(errObj);
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
