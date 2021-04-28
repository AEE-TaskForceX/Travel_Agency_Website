import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import hotelRoutes from './Routes/hotels.js';
import voyagesRoutes from './Routes/voyages';
import volsRoutes from './vols/voyages';



const app = express();

//starting path :  every route in hotel routes is gonna start with hotels  => localhost:5000/hotels
//routes
app.use('/hotels ' , hotelRoutes);
app.use('/voyages ' , voyagesRoutes);
app.use('/vols ' , volsRoutes);


express.json({limit : "30mb" , extended : true});
express.urlencoded({limit : "30mb" , extended : false});
app.use(cors());

const  CONNECTION_URL = "mongodb+srv://admin:2021@cluster0.fwzji.mongodb.net/Travel_Agency?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true } )
    .then( () => app.listen(PORT , () => console.log(`server running on port : ${PORT}`)))
    .catch( (error) => console.log(error.message ));

    mongoose.set('useFindAndModify' , false);
