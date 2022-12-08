const { get } = require('http');
const donationModels = require('../models/scheduleDonationModels');


const getAllLinstings = async(req,res) => {
    const data = await donationModels.getListing();
    console.log(data)
    return data ? res.send(data): res.sendStatus(404);

}

const changeStatusToPending = async(req,res) => {
    const {id, user_id} = req.body;
    const data = await donationModels.changeStatus(id);
    const secData = await donationModels.insertSchedule(user_id,id);
    console.log(data);
    console.log(secData)
    return data ? res.send(data): res.sendStatus(404);
}

const userPastListing = async(req,res) => {
    const {user_id} = req.body;
    const data = await donationModels.getUsersListings(user_id);
    return data ? res.send(data): res.sendStatus(404);
}

module.exports = {
    getAllLinstings,
    changeStatusToPending,
    userPastListing
}