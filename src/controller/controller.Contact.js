const Contact = require("../models/contacat..Model")
const Io = require("../utils/Io")
const io = new Io(process.cwd() + "/database/Contact.json")

const { contactValidation } = require("../validations/contact.valid");


const sendContact =  async(req, res)=>{
    const {name , phoneNumber, email, message} = req.body
    const newContact = new Contact(name, phoneNumber, email, message)
    const error = contactValidation({
        name, 
        phoneNumber, 
        email, 
        message
    })
    if(error) return res.status(401).json({message: error.message})
    const data = await io.read()
    const dataForWrite = data.length?[...data, newContact]:[newContact]
    io.write(dataForWrite)
    res.status(201).json({message: `Your request has added Successfully,please wait our response`})

}


const getAll =async(req, res)=>{
    const data = await io.read();
    res.status(200).json({message: "AllFeedback", data})
}

const getOne =async(req, res)=>{
    const id =req.params.id
    const data = await io.read();
    const resoult1 = data.filter((el)=> el.id == id)
    console.log(123)
    resoult1[0].checkAdmin = true
    io.write(data)
    res.status(200).json({message: "resoult", resoult1})
}


module.exports = {
    sendContact,
    getAll,
    getOne,
};