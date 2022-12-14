const pool = require("../db.js")

const getListing = () => {
    return pool.query("SELECT * FROM public.church_listings").then(result => { return result.rows });
}

const changeStatus = (id, status = "pending") => {
    return pool.query("UPDATE public.church_listings SET status = $2 WHERE id = $1 RETURNING *", [id, status]).then(result => { return result.rows[0] });
}

const getUsersListings = (user_id) => {
    return pool.query("SELECT * from schedule_drop_off JOIN church_listings ON schedule_drop_off.church_id = church_listings.id WHERE schedule_drop_off.user_id = $1 AND schedule_drop_off.status_of_donation = 'in progress'  ORDER  BY schedule_drop_off.schedule_time ASC ", [user_id])
        .then(result => { return result.rows });
}

const insertSchedule = (user_id, church_id, item_des,type, schedule_time, day) => {
    return pool.query("INSERT INTO public.schedule_drop_off (user_id,church_id,item_description,type_of_donation,schedule_time,status_of_donation,day) VALUES($1, $2, $3, $4,$5,'in progress', $6) RETURNING *", [user_id, church_id, item_des, type, schedule_time, day]).then(result => { return result.rows[0] });
}

const updateDonationStatusDB = (donation_id) => {
    return pool.query("UPDATE schedule_drop_off Set status_of_donation = 'fulfilled' WHERE schedule_drop_off.donation_id = $1", [donation_id])
}
const userPastListingHereDB = (id) => { 
    return pool.query("SELECT * from schedule_drop_off JOIN church_listings ON schedule_drop_off.church_id = church_listings.id where schedule_drop_off.user_id = $1 AND schedule_drop_off.status_of_donation = 'fulfilled'", [id]).then(result => { return result.rows });
}
module.exports = {
    getListing,
    changeStatus,
    getUsersListings,
    insertSchedule,
    updateDonationStatusDB,
    userPastListingHereDB
}