const knex = require("../db.js");

const registerInfo = async (companyName,email,userName,password) => {
    const register = await knex.raw("INSERT INTO public.business_users (company_name,email,username,password) VALUES(?, ?, ?, ?) RETURNING *",[companyName,email,userName,password]).then(result => result.rows[0])
    return register
}
const loginInfo = async  (userName) => {
    const data = await knex.raw("SELECT * FROM public.business_users WHERE username = ?",[userName]).then(result=> {return result.rows});
    return data
}
module.exports = {
    registerInfo,
    loginInfo
}