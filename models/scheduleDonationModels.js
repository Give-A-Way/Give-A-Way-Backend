const pool = require("../db.js")

const getListing =()=> {
    return pool.query("SELECT * FROM public.church_listings").then(result=> {return result.rows});
}

const changeStatus = (id,status = "pending") => {
    return pool.query("UPDATE public.church_listings SET status = $2 WHERE id = $1 RETURNING *",[id,status]).then(result=> {return result.rows[0]});
}

module.exports = {
    getListing,
    changeStatus
}