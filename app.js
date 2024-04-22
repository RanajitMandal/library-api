import express, { query } from 'express'
import mongoose from 'mongoose';
import employeeRouter from './routers/userrouter.js';
import departmentRouter from './routers/departmentrouter.js';
import url from 'url'; 


const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    res.send('hello world!')
});

app.use('/user', userRouter); 


app.use('/department', departmentRouter);



mongoose.connect('mongodb+srv://root:rootpass@mycluster.vvmjfzt.mongodb.net/employeeDB', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {

        console.log(`example aplicatiion on port ${port}`);
    })
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
