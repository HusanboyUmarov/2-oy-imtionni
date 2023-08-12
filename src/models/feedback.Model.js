const {v4:uuid} = require("uuid")
class Feedback{
    constructor(name, description, photo, job){
        this.id = uuid(),
        this.name = name,
        this.description = description,
        this.photo = photo,
        this.job = job
    }
}

module.exports = Feedback;