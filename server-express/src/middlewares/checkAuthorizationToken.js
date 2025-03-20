import User from "../models/user-model.js";

export default async function checkAuthorizationToken (req, res, next) {
    const token = req.header('X-Authorization');
    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }
    const userById = await User.findById('67d93ba5ba9801bce10714fc');
    const user = await User.findOne({ accessToken: token });
    console.log(token);
    
    console.log(userById);
    
    console.log(user);
    
    if(! user){
        return res.status(403).json({ error: 'Invalid token' });
    }
    
    if(user.role !== 'Admin'){
        return res.status(403).json({ error: 'You are not Admin' });
    }
    

    next();  // Ако токенът е валиден, продължаваме със следващото middleware или обработчик
};