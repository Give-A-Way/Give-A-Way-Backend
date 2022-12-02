const pool = require("../db.js");

const registerInfo = async (companyName,email,userName,password) => {
    const register = await pool.query("INSERT INTO public.business_users (company_name,email,username,password) VALUES($1, $2, $3, $4) RETURNING *",[companyName,email,userName,password]).then(result => result.rows[0])
    return register
}

const loginInfo = async  (userName) => {
    const data = await pool.query("SELECT * FROM public.business_users WHERE username = $1",[userName]).then(result=> {return result.rows});
    return data
}
module.exports = {
    registerInfo,
    loginInfo
}