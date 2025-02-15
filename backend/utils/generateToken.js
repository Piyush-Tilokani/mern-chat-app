import jwt from 'jsonwebtoken'  

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '10d'
    })
    res.cookie('jwt', token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true, //To prevent XSS attacks
        sameSite: true, //To prevent CSRF attacks
        secure: process.env.NODE_ENV === 'production' ? true : false,
    })
}

export default generateTokenAndSetCookie;