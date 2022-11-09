const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.insertUser = async (req, res, next) => {
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


}
exports.loginUser = async (req, res) => {
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
    } catch(error){
        res.status(500).send({
            message: 'Something went wrong!'
        });
        console.log(error);
    }
    
}

exports.checkAuth = async (req, res) => {
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
};