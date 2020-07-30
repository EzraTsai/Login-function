const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./logincheck')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const info = req.body
    const checkInfo = loginCheck(info)
    if (checkInfo.includes('Wrong')) {
        res.render('index', { checkInfo, info })
    } else if (checkInfo.includes('account')) {
        res.render('index', { checkInfo, info })
    } else {
        res.render('welcome', { checkInfo })
    }
})

app.listen(3000, () => {
    console.log('listening on prot 3000 now')
})