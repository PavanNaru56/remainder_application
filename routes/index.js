
const express = require('express');
const router = express.Router();

///const { Router } = require('express');
const remainderController = require("../controllers/remainderController");


router.get("/",remainderController.remainderController);

router.post("/setRemainder",remainderController.setRemainder);

module.exports = router;