const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User = require('./models/User');
mongoose.connect('mongodb://localhost/userData')

const port=8000;
const app= express();

app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  User.create(req.body)
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  User.findById(req.params.id)
})
// UPDATE
.put((req,res)=>{
  User.findByIdAndUpdate(req.params.id)
})
// DELETE
.delete((req,res)=>{
  User.findByIdAndDelete(req.params.id)
})