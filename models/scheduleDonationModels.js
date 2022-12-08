const pool = require("../db.js")

const getListing = () => {
    return pool.query("SELECT * FROM public.church_listings").then(result => { return result.rows });
}

const changeStatus = (id, status = "pending") => {
    return pool.query("UPDATE public.church_listings SET status = $2 WHERE id = $1 RETURNING *", [id, status]).then(result => { return result.rows[0] });
}

const getUsersListings = (user_id) => {
    return pool.query("SELECT public.church_listings.* FROM public.schedule_drop_off JOIN church_listings ON public.schedule_drop_off.church_id = public.church_listings.id WHERE public.schedule_drop_off.user_id = $1", [user_id])
        .then(result => { return result.rows});
}

const insertSchedule = (user_id, church_id,item_des, schedule_time ) => {
    return pool.query("INSERT INTO public schedule_drop_off (user_id,church_id,item_description,schedule_time) VALUES($1, $2, $3, $4) RETURNING *", [user_id, church_id, item_des, schedule_time]).then(result => { return result.rows[0] });
}
module.exports = {
    getListing,
    changeStatus,
    getUsersListings,
    insertSchedule,
}