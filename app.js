const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Working now')
})

app.listen(3000, () => {
    console.log('listening on prot 3000 now')
})