
const response = require('../response')
const db = require('../settings/db')

exports.getAllPr = (req,res) => {
    db.query('SELECT `name`,`price` FROM `services`',(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    })
}