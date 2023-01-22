const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');

const updateNote = (req, res) => {
    if(!req.cookie.logUser) return res.json({status:0, meessage: 'Please login again!'})
    const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
        if (err) return null;
        else return id 
    
    })
    if(user==null) return res.json({status:0, message: 'Please login again!'})
    const { title, note, noteID} = req.body;
    const time = newDate(Date.now());
    const date = time.getFullYear()+"-"+time.getMonth()+1+"-"+ time.getDate() + ' ' + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    db.query('UPDATE notes SET Title = ?, Note=?, Date=? WHERE NoteID=? AND UserID=?', [title, note, date, noteId, id],
         (err, result) => {
        if (err) throw err
        return res.json({status: 1, message: 'Note has been updated'})

    })
}
module.exports = updateNote