'use strict'

module.exports = (app) => {
    const priceCont = require('../controller/priceCont')
    const Users = require('../controller/UsersController')
    const ProductCont = require('../controller/ProductCont')
    const Staff = require('../controller/StaffController')
    app
        .route('/price')
        .post(priceCont.getAllPr)
    app
        .route('/reviews/addReviews')
        .post(Users.addReviews)
    app
        .route('/reviews/getReviews')
        .post(Users.getAllReviews)
    app
        .route('/reviews/getAllProd')
        .post(ProductCont.getAllProd)
    app
        .route('/inform')
        .post(Staff.getAllStaff)
}


