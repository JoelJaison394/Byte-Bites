const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

dotenv.config({path:"config/config.env"})

//connection to the database
connectDatabase();

const server = app.listen(9000,()=>{
    console.log(`server is running on http://localhost${process.env.PORT}`)
})