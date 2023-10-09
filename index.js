const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');


const PORT = 8000;
const URL = 'mongodb+srv://ultexplorer:<password>@cluster0.p4c6m1h.mongodb.net/<basename>?retryWrites=true&w=majority'

const app = express();
app.use(express.json());
app.use('/auth', authRouter)

const start = async () => {
    try{
        await mongoose.connect(URL);
        await app.listen(PORT, () => console.log(`Server lisnening port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

start()