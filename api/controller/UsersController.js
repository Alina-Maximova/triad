

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')



  
            exports.addReviews = (req,res) => {
   
                db.query("SELECT `name`,`text` FROM `reviews` ",(error,rows,fields) => {
                    if(error) {
                        response.status(400,error,res);
                    }else{
                        const name = req.body.name
                        const text = req.body.text

                        const sql = "INSERT INTO `reviews`(`name`,`text`) VALUES('"+ name +"','"+ text + "')";
                        db.query(sql,(error,result) => {
                            if(error){
                                response.status(400,error,res);
                            }else {
            
                                response.status(200,{message:`Вы оставили отзыв`,result},res)
                               
                                         
                                        }
                                    }   )     
                                }
            
                                
                            })
                        }

exports.getAllReviews = (req,res) => {
    db.query('SELECT * FROM `reviews`',(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    
    })
}