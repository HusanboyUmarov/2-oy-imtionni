const {v4:uuid} = require("uuid")
class Service{
    constructor(name, description, photo ){
        this.id = uuid(),
        this.name = name,
        this.description = description,
        this.photo = photo
    }
}

module.exports = Service;