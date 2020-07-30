function loginCheck(info) {
    const users = [
        {
            firstName: 'Tony',
            email: 'tony@stark.com',
            password: 'iamironman'
        },
        {
            firstName: 'Steve',
            email: 'captain@hotmail.com',
            password: 'icandothisallday'
        },
        {
            firstName: 'Peter',
            email: 'peter@parker.com',
            password: 'enajyram'
        },
        {
            firstName: 'Natasha',
            email: 'natasha@gamil.com',
            password: '*parol#@$!'
        },
        {
            firstName: 'Nick',
            email: 'nick@shield.com',
            password: 'password'
        }
    ]
    for (let i = 0; i <= users.length; i++) {
        if (info.email === users[i].email && info.password === users[i].password) {
            return ` ${users[i].firstName}!`
        } else if (info.email === users[i].email && info.password !== users[i].password) {
            return 'Password is Wrong!'
        } else {
            return 'You don\'t have an account!'
        }
    }
}
module.exports = loginCheck