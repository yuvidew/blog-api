const blogDataSchema = require('../model/blog.model')

const getAddBlogs = async (req , res) => {
    const {title , content , category} = req.body
    console.log(title , content);
    try {
        const result = await blogDataSchema.create({
            date : Date.now(),
            title , content , category
        })

        if(result){
            return res.status(200).json(result)
        }else{
            return res.status(404).json('error')
        }
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getFilterBlogs = async (req , res) => {
    const data = await blogDataSchema.find(req.query)
    return res.status(200).json(data)
}

module.exports = {getAddBlogs , getFilterBlogs}