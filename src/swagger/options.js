const swaggerJSDoc = require("swagger-jsdoc")


const swaggerDefinition = {
    openapi : "3.0.0",
    info : {
        title : "2-Imtihon",
        version :"1.0.0",
        description : "Imtihon uchun qilingan Swagger, faqat file va textni bir vaqtda jonatib bolmadi",
        servers : ["http://localhost:4000"], 
    },
}
const options = {
    swaggerDefinition,
    apis: ["src/swagger/*.swagger.js"]
};

const swaggerSpec = swaggerJSDoc(i=options)

module.exports = {swaggerSpec};
