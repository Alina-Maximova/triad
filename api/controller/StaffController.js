
const response = require('../response')
const db = require('../settings/db')

exports.getAllStaff = (req,res) => {
    db.query('SELECT `FIO`,`post` FROM `staff`',(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    })
}