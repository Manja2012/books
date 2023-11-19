db.createUser({
    user: 'manja',
    pwd: 'manja',
    roles: [
        {
            role: 'dbOwner',
            db: 'favbooks'
        }
    ]
});
db.createCollection("books");
