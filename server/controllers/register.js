const bcrypt = require('bcryptjs');
const db = require('../routes/db-config');
const register = async (req, res) => {
    const {name,email,password: rawPassword} = req.body;
    db.query('SELECT email from users WHERE email = ?', [email], async (stop, chkuser) => {
        if (stop) throw stop;
        if(chkuser[0]) return res.json({status: 0, message: 'User already exists with that email!'
         })
        const password = await bcrypt.hash(rawPassword,10)
        db.query('INSERT INTO Users SET ?', {name,email,password}, (err, result) => {
            if (err) throw err
            return res.json({ status: 1, message: 'User has been registered!'})
        })
    })  
}
module.exports = register