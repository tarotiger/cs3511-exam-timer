const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/timer.html'))
})

app.use(express.static(__dirname + '/public'))
app.use('/', router)
const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Now serving timer on localhost:${ PORT }`)
})
