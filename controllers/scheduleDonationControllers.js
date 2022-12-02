const { get } = require('http');
const donationModels = require('../models/scheduleDonationModels');


const getAllLinstings = async(req,res) => {
    const data = await donationModels.getListing();
    console.log(data)
    return data ? res.send(data): res.sendStatus(404);

}

const changeStatusToPending = async(req,res) => {
    const {id} = req.body;
    const data = await donationModels.changeStatus(id);
    console.log(data);
    return data ? res.send(data): res.sendStatus(404);
}

module.exports = {
    getAllLinstings,
    changeStatusToPending
}