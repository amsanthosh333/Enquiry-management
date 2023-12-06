
const enquiryMasterService = require('../services/enquiry');

 const getAllEnquiry = async (req, res) => {
    try {
        const opData = await enquiryMasterService.getAllEnquiry(req.body)
     
        return res.send(opData)
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
}
const createEnquiry = async (req, res) => {
    try {
        const opData = await enquiryMasterService.createEnquiry(req.body)
     
        return res.send(opData)
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
}
module.exports = {  getAllEnquiry ,createEnquiry };