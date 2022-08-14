const path = require('path') 
const express = require('express')

// Set up express server
const app = express()

// @desc Main page
// @route GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))