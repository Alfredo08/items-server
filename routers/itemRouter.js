const express = require( 'express' );
const itemRouter = express.Router();
const jsonParser = express.json();
const itemService = require( './../services/itemService' );
const userService = require( './../services/userService' );

itemRouter
    .post( '/', jsonParser, ( req, res, next ) => {

        const ownerid = req.body.ownerid;

        userService
            .getUserById( req.app.get( 'db' ), ownerid )
            .then( result => {
                if( result.length === 0 ){
                    res.statusMessage = "The user ownerid doesn't exists!";
                    return res.status( 404 ).end();
                }

                const newItem = {
                    id : req.body.id,
                    name : req.body.name,
                    ownerid
                };
                console.log( itemService );
                itemService
                    .createItem( req.app.get( 'db' ), newItem )
                    .then( result => {
                        return res.status( 201 ).json( result );
                    })
                    .catch( next );
            })
    });

module.exports = itemRouter;