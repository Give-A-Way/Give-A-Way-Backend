const { get } = require('http');
const donationModels = require('../models/scheduleDonationModels');


const getAllLinstings = async(req,res) => {
    const data = await donationModels.getListing();
    console.log(data)
    return data ? res.send(data): res.sendStatus(404);

}

const changeStatusToPending = async(req,res) => {
    const {id, user_id, itemDescription, time} = req.body;
    const data = await donationModels.changeStatus(id);
    const secData = await donationModels.insertSchedule(user_id,id,itemDescription,time);
    console.log(data);
    console.log(secData)
    return data ? res.send(data): res.sendStatus(404);
}

const userPastListing = async(req,res) => {
    // const {user_id} = req.body;
    console.log(req.params.id)
    const data = await donationModels.getUsersListings(req.params.id);
    return data ? res.send(data): res.sendStatus(404);
}

const updateDonationStatus = async (req, res) => { 
    donationModels.updateDonationStatusDB(req.params.id)
    return res.send({ true: "true" });
}
module.exports = {
    getAllLinstings,
    changeStatusToPending,
    userPastListing,
    updateDonationStatus
}