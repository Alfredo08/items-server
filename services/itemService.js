const itemService = {
    createItem( db, newItem ){
        return db
                .insert( newItem )
                .into( 'items' )
                .returning( '*' )
                .then( result => {
                    return result[0]
                });
    }
};

module.exports = itemService;