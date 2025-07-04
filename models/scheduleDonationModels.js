const knex = require("../db.js")

const getListing = () => {
    return knex.raw("SELECT * FROM church_listings").then(result => { return result.rows });
}

const changeStatus = (id, status = "pending") => {
    return knex.raw("UPDATE public.church_listings SET status = ? WHERE id = ? RETURNING *", [status, id]).then(result => { return result.rows[0] });
}

const getUsersListings = (user_id) => {
    return knex.raw(`SELECT * from schedule_drop_off JOIN church_listings ON schedule_drop_off.church_id = church_listings.id WHERE schedule_drop_off.user_id = ? AND schedule_drop_off.status_of_donation = 'in progress'  ORDER  BY schedule_drop_off.schedule_time ASC`, [user_id]).then(result => { return result.rows });
}

const insertSchedule = (user_id, church_id, item_des, type, schedule_time, day) => {
    return knex.raw("INSERT INTO public.schedule_drop_off (user_id,church_id,item_description,type_of_donation,schedule_time,status_of_donation,day) VALUES(?, ?, ?, ?,?,'in progress', ?) RETURNING *", [user_id, church_id, item_des, type, schedule_time, day]).then(result => { return result.rows[0] });
}

const updateDonationStatusDB = (donation_id) => {
    return knex.raw(`UPDATE public.schedule_drop_off Set status_of_donation = 'fulfilled' WHERE public.schedule_drop_off.donation_id = ?`, [donation_id]).then(result => { return result.rows[0] });
}
const userPastListingHereDB = (id) => {
    return knex.raw("SELECT * from schedule_drop_off JOIN church_listings ON schedule_drop_off.church_id = church_listings.id where schedule_drop_off.user_id = ? AND schedule_drop_off.status_of_donation = 'fulfilled'", [id]).then(result => { return result.rows });
}
module.exports = {
    getListing,
    changeStatus,
    getUsersListings,
    insertSchedule,
    updateDonationStatusDB,
    userPastListingHereDB
}