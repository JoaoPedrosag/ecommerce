require('dotenv').config();
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to database!');
}).catch((err)=> {
    console.log(err);
});

app.use(express.json());


const User = require('./models/User');
const { exists } = require('./models/User');



app.post('/auth/register', async (req, res, next) => {
    const {name, email, password, admin } = req.body;
    
   
    if(!email && !password && !name) {
        return res.status(400).send({
            message: 'Email and password are required!'
        });
    }
    
    const userExists = await User.findOne({email: email});
    if(userExists) {
        return res.status(400).send({
            message: 'User already exists!'
        });
    }
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);


    const user = new User({
        name: name,
        email: email,
        password: hash,
    });

    try{
        await user.save();
        res.status(201).send({
            message: 'User created successfully!'
        });
    } catch(error) {
        res.status(500).send({
            message: 'Something went wrong!'
        });
        console.log(error);
    }


});


app.post('/auth/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if(!user) {
        return res.status(404).send({
            message: 'User does not exist!'
        });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) {
        return res.status(400).send({
            message: 'Invalid password!'
        });
    }
    try {
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.status(200).send({
            message: 'Login successful!',
            token: token
        });
    } catch{
        res.status(500).send({
            message: 'Something went wrong!'
        });
        console.log(error);
    }
    
});

/// private Route
app.get("/user/:id",checkToken, async (req, res) => {
    const id = req.params.id;
    
    const user = await User.findById(id, '-password');
    if(!user) {
        return res.status(404).send({
            message: 'User does not exist!'
        });
    }

    res.status(200).send({
        message: user,
    });
});


function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];   
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(!token) {
        return res.status(401).send({
            message: 'No token provided!'
        });
    }
    try{
        const secret =  process.env.JWT_SECRET;
        jwt.verify(token, secret);
        next();
    } catch(error) {

    }
    
}
module.exports = app;