const donationModels = require('../models/scheduleDonationModels');

const getAllLinstings = async (req, res) => {
    const data = await donationModels.getListing();
    return data ? res.send(data) : res.sendStatus(404);

}

const changeStatusToPending = async (req, res) => {
    const { id, user_id, itemDescription, type, time, day } = req.body;
    const data = await donationModels.changeStatus(id);
    const secData = await donationModels.insertSchedule(user_id, id, itemDescription, type, time, day);
    return data ? res.send(data) : res.sendStatus(404);
}

const userPastListing = async (req, res) => {
    const data = await donationModels.getUsersListings(req.params.id);
    return data ? res.send(data) : res.sendStatus(404);
}

const updateDonationStatus = async (req, res) => {
    donationModels.updateDonationStatusDB(req.params.id)
    return res.send({ true: "true" });
}
const userPastListingHere = async (req, res) => {
    let data = await donationModels.userPastListingHereDB(req.params.id)
    // console.log(data)
    return data ? res.send(data) : res.sendStatus(404);
}

module.exports = {
    getAllLinstings,
    changeStatusToPending,
    userPastListing,
    updateDonationStatus,
    userPastListingHere
}