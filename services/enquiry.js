let func = require('../config/index');
const { ObjectId } = require('bson');
const enquirySchema = require('../models/enquiry');
const jsend = require('../constant/jsend')

 const getAllEnquiry = async (body) => {
    try {
        let obj = {};
       
        let findAllEnquiry = await enquirySchema.find(obj);
        if (findAllEnquiry.length) {
            return jsend(200 , findAllEnquiry);
        } else {
            return jsend(406, "failed to find all the menu");
        }
    } catch (e) {
        return jsend(406, e.message);
    }
	// return new Promise(async (resolve, reject) => {	
	//     enquirySchema.find({}).exec(function (err, docs) {
	// 		console.log(err, docs);
	// 		if (err) {
	// 			func.response.errorJson['message'] = 'Error in retrieving data';
	// 			func.response.errorJson['error'] = err;
	// 			return resolve(func.response.errorJson);
	// 		}
    //         else if (!docs || docs.length === 0) {
	// 			func.response.successJson['data'] = docs;
	// 			return resolve(func.response.successJson);
	// 		} 
    //         else {
	// 			func.response.successJson['data'] = docs;
	// 			return resolve(func.response.successJson);
	// 		}
	// 	}) 
	// });
    
};


let createEnquiry = async (req, res) => {
    try {
        let findParticular = await enquirySchema.findOne({ customer_name: req.customer_name });
        if (findParticular) {
            return jsend(200, "menu name already exciting");
        }
        let createNewEnquiry = new enquirySchema(req);
        createNewEnquiry = await createNewEnquiry.save();
        func.response.successJson['data'] = createNewEnquiry;
        return resolve(func.response.successJson);;
    } catch (e) {
        return jsend(406, e.message);
    }
}

module.exports = {  getAllEnquiry,createEnquiry };