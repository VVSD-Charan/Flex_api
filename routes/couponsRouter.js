import express from 'express';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';
import { createCouponCtrl, getAllCouponsCtrl } from '../controllers/couponsCtrl.js';

const couponRouter = express.Router();

couponRouter.post('/',isLoggedIn,createCouponCtrl);
couponRouter.get('/', getAllCouponsCtrl);

export default couponRouter;