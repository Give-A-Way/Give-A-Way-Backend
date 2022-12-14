const express = require('express');
const router = express.Router();
const donationControllers = require("../controllers/scheduleDonationControllers")

router.get('/',donationControllers.getAllLinstings)
router.patch('/',donationControllers.changeStatusToPending)
router.get('/user_id/:id', donationControllers.userPastListing)
router.get('/user_ids/past/:id', donationControllers.userPastListingHere)
router.patch('/donation/:id', donationControllers.updateDonationStatus)
module.exports = router
