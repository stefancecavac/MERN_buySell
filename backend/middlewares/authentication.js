import jwt from 'jsonwebtoken'

const authenticate = async(req, res ,next) => {
    const token = req.cookies.token
    try{
        if(!token){
            return res.status(400).json({error: 'no authorization token'})
        }

        const decodedToken = jwt.verify(token , process.env.SECRET)
        if(!decodedToken){
            return res.status(400).json({error: 'not a valid token'})
        }

        req.user = decodedToken
        next()
    }
    catch(error) {
        req.status(500).json({error: error.message})
    }
    
}

export default authenticate