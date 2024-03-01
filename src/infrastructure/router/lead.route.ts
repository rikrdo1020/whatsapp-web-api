import express, { Router } from "express";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
const router: Router = Router();

/**
 * http://localhost/lead POST
 */
const leadCtrl: LeadCtrl = container.get("lead.ctrl");
router.post("/", leadCtrl.sendCtrl);
router.post("/group", leadCtrl.sendMsgGroupCtrl);
router.post("/media", leadCtrl.sendImgCtrl);

export { router };
