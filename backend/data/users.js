import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "Sky Gupta",
        email: 'Sky@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name: "Air Gupta",
        email: 'air@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
];

export default users;