import express from 'express';
//import { getHotels , createHotel , getHotel  } from '../Controllers/hotels.js';
import { getCities , createCity , getCity  , getCityy }  from '../Controllers/city.js';
const router = express.Router();



//router.get('/' , getHotels);
//router.get('/' , getHotel);
router.get('/' , getCityy);
//router.post('/' , createHotel);


export default router;