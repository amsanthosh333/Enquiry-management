const router = require('express').Router();
let func = require('../config/index');
const enquiryController = require('./../controller/enquiry');


router.get(func.url.GET_ENQUIRY, enquiryController.getAllEnquiry);
router.post(func.url.CREATE_ENQUIRY, enquiryController.createEnquiry);



module.exports = router;