const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
const PORT = process.env.PORT || 3000



app.get('/', (req, res)=>{
	res.render('home')
})


//set template layout

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resource/views'))
app.set('view engine', 'ejs')


app.listen(PORT, ()=>{
	console.log(`Server is active at http://localhost:${PORT}`)
})