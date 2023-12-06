const express = require("express");
const bodyParser = require('body-parser'); 
const config = require("../config/config.js");
const cors = require('cors');
const mongoose = require('mongoose');

const router = express.Router();

router.use(bodyParser.json());
router.use(cors());

router.use("/enquiry", require('./../router/enquiry'));
// router.use("/follow-up", require('../router/follow-up.js'));

module.exports = (req, res, next) => {
  router(req, res, next);
};