//index, show , store , update , destroy
//mesmo comando do get,post,put,delete

const User = require('../models/User');

module.exports = {
     async store(req , res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email});
        }

        return res.json(user);
    }
};