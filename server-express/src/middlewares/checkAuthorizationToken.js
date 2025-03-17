import User from "../models/user-model.js";

export default async function checkAuthorizationToken (req, res, next) {
    const token = req.header('X-Authorization');
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const user = await User.findOne({accessToken: token});
    
    if(! user){
        return res.status(403).json({ message: 'Invalid token' });
    }
    
    if(user.role !== 'Admin'){
        return res.status(403).json({ message: 'You are not Admin' });
    }
    

    next();  // Ако токенът е валиден, продължаваме със следващото middleware или обработчик
};