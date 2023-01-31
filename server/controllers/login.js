const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../routes/db-config');

const login = async (req, res) => {
    const {name,email,password} = req.body;
    console.log("*******EMAIL IS******** " + email);
    db.query('SELECT * FROM users WHERE email = ?', [email], async (stop, chkuser) => {
        if (stop) throw stop;
        if (!chkuser[0] || !await bcrypt.compare(password, chkuser[0].password)) return res.json({
            status:0,
            message: 'User is not registered!'})
            console.log("***********CREATING TOKEN***********")
            const token = jwt.sign({id:chkuser[0].userID}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        })
        const cookieOption = {
            expiresIn: new Date(Date.now() * process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        res.cookie('logUser', token, cookieOption)
        return res.json({status:1, message: 'User has been logged in!'})
    })
}

module.exports = login;
