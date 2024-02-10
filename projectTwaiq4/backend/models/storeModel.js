const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
    name: { type: String , required: true},
    mangerName: { type: String, required:true},
    isDeleted: { type:Boolean, default: false},
})

const Store = mongoose.model("Store", storeSchema)

module.export = Store