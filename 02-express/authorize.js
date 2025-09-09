const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'Mujib'){
        req.user = {name:'Mujib', id:3}
        next()
    }
    else{
        res.status(401).send('Unaothorized')
    }
    console.log('authorize');
    
    next()
}

module.exports = authorize