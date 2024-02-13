const express = require('express')
const app = express()
const blogRoute = require('./router/blog.router');
const { default: mongoose } = require('mongoose');
const port = 2000 || process.env.PORT;

/**they are same middelwares  */
app.use(express.json())
app.use(express.urlencoded({extended : false}))

/**connect node js and mongodb */

const uri = "mongodb+srv://yd00102:6NUcfYbCudHL3rDv@cluster0.tovruga.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(() => console.log('mongoDb is connected'))
.catch(error => console.log(error))

app.use('/api' , blogRoute)

app.listen(port , () => {
    console.log(`server is listen in port http://localhost:${port}`);
})

