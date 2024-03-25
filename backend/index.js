const express = require('express');
const cors = require('cors')
const app =express();
const studentRoute = require('./routes/studentRoute');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors())

MONGO_URI = 'mongodb+srv://Titilola:Titilola@cluster0.enwnj61.mongodb.net/mongo?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI,()=>{
    console.log('Connected to database successfully');
})

app.listen('5000',()=>{
    console.log('Backend in running at port 5000')
});


app.use('/api/register',studentRoute)