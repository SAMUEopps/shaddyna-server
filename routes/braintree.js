import { Router } from "express";
const router = Router();
import brainTreeController from "../controller/braintree";

router.post("/braintree/get-token", brainTreeController.ganerateToken);
router.post("/braintree/payment", brainTreeController.paymentProcess);

export default router;
