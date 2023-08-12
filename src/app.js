const config = require("../config")
const mainRouter = require("./router")

const express = require("express")
const fileupload = require("express-fileupload")
const app = express()

const swaggerUi = require("swagger-ui-express") 


const {swaggerSpec} = require("./swagger/options")


app.use(express.json())
app.use(express.urlencoded())
app.use(fileupload())
app.use(express.static(process.cwd()+"/uploads"))
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/api", mainRouter)


app.listen(config.port, (er)=>{
    console.log(`${config.port} is running...`)
})