const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');

const deleteNote = (req, res) => {
    if(!req.cookie.logUser) return res.json({status:0, meessage: 'Please login again!'})
    const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
        if (err) return null;
        else return id 
    
    })
    if(user==null) return res.json({status:0, message: 'Please login again!'})
    const {id} = req.body
    db.query('DELETE FROM Notes where NoteID = ?', [id], (err, res) => {
        if(err) throw err;
        return res.json({status:1, message:'Note deleted'})

    })
}

module.exports = deleteNote