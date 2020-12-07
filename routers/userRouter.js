const express = require( 'express' );
const userRouter = express.Router();
const jsonParser = express.json();
const userService = require( './../services/userService' );

userRouter
    .post( '/', jsonParser, ( req, res, next ) => {
        const newUser = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            id : req.body.id
        };

        userService
            .createUser( req.app.get( 'db' ), newUser )
            .then( result => {
                return res.status( 201 ).json( result );
            })
            .catch( next );
    });

module.exports = userRouter;