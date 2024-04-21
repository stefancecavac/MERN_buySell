import User from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'pls fill out all fields' })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'not a valid email' })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: 'not a strong password' })
    }

    try {
        const usedEmail = await User.findOne({ email })
        if (usedEmail) {
            return res.status(400).json({ error: 'email already taken' })
        }

        const usedUsername = await User.findOne({ username })
        if (usedUsername) {
            return res.status(400).json({ error: 'username already taken' })
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await User.create({ username, email, password: hash })
        const token = jwt.sign({ _id: user.id }, process.env.SECRET, { expiresIn: '3d' })

        res.cookie('token', token, { httpsOnly: true })
        res.status(201).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'pls fill out all fields' })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'incorrect email' })
        }

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(400).json({ error: 'incorrect password' })
        }
        const token = jwt.sign({ _id: user.id }, process.env.SECRET, { expiresIn: '3d' })

        res.cookie('token', token, { httpOnly: true })
        res.status(201).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const logoutUser = async(req,res) => {
    res.clearCookie('token')
    res.end()
}

export { registerUser, loginUser ,logoutUser}