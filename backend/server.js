require('dotenv').config()
const app=require('./src/app.js')
const dbConnect = require('./src/db/dbConnect')

dbConnect()

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})

