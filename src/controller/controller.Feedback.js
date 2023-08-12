const Io = require("../utils/Io")
const io = new Io(process.cwd()+"/database/feedback.json")
const ModelFeedback = require("../models/feedback.Model")
const path = require("path")
const {v4:uuid} = require("uuid")



const getAll =async(req, res)=>{
    const data = await io.read();
    res.status(200).json({message: "AllFeedback", data})
}

const getOne =async(req, res)=>{
    const id =req.params.id
    const data = await io.read();
    const resoult = data.filter((el)=> el.id == id)
    res.status(200).json({message: "resoult", resoult})
}

const add = async(req, res)=>{

    const data = await io.read()
    const {name, description, job} = req.body
    const img = req.files?.photo
    const newName =`uploads/${uuid()}.${path.extname(img.name)}`
    const newData = new ModelFeedback(name, description,`${uuid()}${path.extname(img.name)}`,job)
    img.mv(newName)
    data.length? io.write([...data,newData]):io.write([newData])

    res.status(201).json({message: "Succesfully"})

}



const del = async(req, res)=>{
    const id =req.params.id;

    const data = await io.read();
    const resoult = data.filter((el)=> el.id != id)
   
    if(!resoult.length)
    res.status(401).json({message: "We don't have this Service"})
    else
    res.status(201).json({message: "Succesfully"})
    io.write(resoult)

}

const put = async(req, res)=>{
    const id =req.params.id
    const data = await io.read()
    const {name, description} = req.body
    const img = req.files?.photo
    const resoult1 = data.filter((el)=>el.id == id)
    const resoult2 = data.filter((el)=>el.id != id)
    if(!resoult1.length) return res.status(401).json({message:"We cam't find this Service"})
    console.log(name, description)
    // console.log(resoult2)
    resoult1[0].name = name,
    resoult1[0].description = description
    const changingData = [...resoult2, resoult1[0]]
    console.log(changingData)
    io.write(changingData)
    const newName =`uploads/${uuid()}.${path.extname(img.name)}`
    img.mv(newName)
    // data.length? io.write([...data,newData]):io.write([newData])

    res.status(201).json({message: "Succesfully"})

}

module.exports = {
    getAll,
    getOne,
    add,
    del,
    put
}