import dotenv from 'dotenv';
dotenv.config({ path:'./config.env' });
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from "./Routes/authentification.js"
import privateRoutes from "./Routes/private.js"
import flightsRoutes from "./Routes/vols.js"

//import volRoutes from "./Routes/vols.js"
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res, next) => {
    res.send("Api running");
  });
//app.use('/vol' , volRoutes);
app.use('/api/authentification' , authRoutes);
app.use('/private' , privateRoutes);
app.use('/travel' , flightsRoutes);



//express.json({limit : "30mb" , extended : true});
//express.urlencoded({limit : "30mb" , extended : false});
//app.use(cors());

const  CONNECTION_URL = "mongodb+srv://admin:2021@cluster0.fwzji.mongodb.net/Travel_Agency?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true } ) 
    .then( () => app.listen(PORT , () => console.log(`server running on port : ${PORT}`)))
    .catch( (error) => console.log(error.message ));

    mongoose.set('useFindAndModify' , false);
