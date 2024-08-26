
/////////////////////////////////////////////////////////////////////////
     const express = require ('express')
     const app = express()
     const port = process.env.PORT || 3000
    require('./data/mongoose')
    app.use(express.json())
    
    const userRouter = require("./routers/user")
    const taskRouter = require('./routers/task')

    app.use(userRouter)
    app.use(taskRouter)


//////////////////////////////////////////////////////////////////////////////////////


app.listen( port , () => {console.log("All Done Successfully")})






