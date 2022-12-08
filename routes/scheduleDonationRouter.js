const express = require('express');
const router = express.Router();
const donationControllers = require("../controllers/scheduleDonationControllers")

router.get('/',donationControllers.getAllLinstings)
router.patch('/:id',donationControllers.changeStatusToPending)
router.get('/user_id',donationControllers.userPastListing)

module.exports = router
