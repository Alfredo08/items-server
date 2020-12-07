const express = require( 'express' );
const app = express();
const userRouter = require( './routers/userRouter' );
const itemRouter = require( './routers/itemRouter' );

app.use( '/api/users', userRouter );
app.use( '/api/items', itemRouter );


module.exports = app;