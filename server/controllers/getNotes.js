const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');
const getNotes = (req, res) => {
    //get logged on user
    if(!req.cookies.logUser) return res.json({status:0})
    const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
        if (err) {
            
            console.log("error is" + err);
            return null;
        }
        else {
            console.log("id is " + id);
            return id
        }
    })
    console.log("user is " + user);
    if (user == null) return res.json({status: 0})
    db.query('SELECT * FROM Notes WHERE UserID = ?', [user.id], (err, result) => {
        if(err) throw err

        result.forEach((e) => {
            e.Note = e.Note.toString();
        })
            
        return res.json(result)
    })

}

module.exports = getNotes