const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');

const createNote = (req, res) => {
    if(!req.cookies.logUser) return res.json({status:0, meessage: 'Please login again!'})
    const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
        if (err) return null;
        else return id 
    
    })
    if(user==null) return res.json({status:0, message: 'Please login again!'})
    const { title, note} = req.body;
    const time = new Date(Date.now());
    console.log("*****************IN CREATE NOTE)********************");
    console.log("title is " + title);
    console.log("not is " + note);
    console.log("id is " + [user.id]);
    const date = time.getFullYear()+"-"+time.getMonth()+1+"-"+ time.getDate() + ' ' + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    db.query('INSERT INTO notes SET userID = ?, title = ?, note = ?, date = ?', [user.id,title, note, date], (err, result) => {
        if (err) throw err
        return res.json({status: 1, message: 'Note has been added'})

    })
}
module.exports = createNote