const db = require("../routes/db-config");
const jwt = require('jsonwebtoken');

const isLogged = (req, res) => {
    console.log("in islogged function");
    console.log("req is " + req.cookies.logUser);
    if(!req.cookies.logUser) return res.json({status:0, message: 'No cookie!'})
    const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
        if (err) {
            return null;
            console.log("error is" + err);
        }
        else {
            console.log("id is " + id);
            return id
        }
    })
    console.log("user is " + user);
    if (user == null) return res.json({status: 0, message: "No user"})
    console.log("**********USER ID IS " + [user.id]);
    db.query('SELECT * FROM users WHERE userID = ?', [user.id], (err, result) => {
        if (err) return res.json({status: 0, message: "Not finding id"});
        console.log("USER IS " + result[0].email)
        return res.json({status: 1, message: "User found", user: result[0].email })
    })
}

module.exports = isLogged