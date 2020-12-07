
const userService = {
    createUser( db, newUser ){
        return db
                .insert( newUser )
                .into( 'users' )
                .returning( '*' )
                .then( result => {
                    return result[0]
                });
    },
    getUserById( db, id ){
        return db
                .select( '*' )
                .from( 'users' )
                .where( {id} )
                .then( result => {
                    return result;
                })
    }
}

module.exports = userService;