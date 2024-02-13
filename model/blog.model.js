const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    content : {
        type : String,
    },
    date : {
        type : String,
    },
    category : {
        type : String,

    }
})

const blogDataSchema = mongoose.model('blog-data' , blogSchema)

module.exports = blogDataSchema
// 6NUcfYbCudHL3rDv