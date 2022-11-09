exports.checkUser = (req, res, next) =>{
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