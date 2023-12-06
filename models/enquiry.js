const mongoose = require('mongoose')
const { ObjectId } = require('bson')

let enquirySchema = new mongoose.Schema({

    customer_name: { type: String, required: true },

})

// let enquirySchema = new mongoose.Schema({
//     enquiry_type: { type: String, required: true },
//     lead_source: { type: String, required: true },
//     customer_name: { type: String, required: true },
//     address: { type: String, required: false },
//     mob_num: { type: Number, required: true },
//     alt_mob_num: { type: Number, required: false },

//     product_name: { type: String, required: true },
//     product_variant: { type: String, required: false },
//     color: { type: String, required: false },
//     aprox_product_cost: { type: String, required: true },
//     payment_method: { type: String, required: false },
//     enquiry_date: { type: String, required: false },
//     enquiry_by: { type: String, required: false },
// },
// {
//     timestamps: true,
// }
// )
module.exports = mongoose.model('enquiry', enquirySchema)