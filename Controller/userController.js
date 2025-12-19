const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
// register

exports.register = async (req, res) => {
    const { username, email, password } = req.body
    console.log(`inside register controller function`);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Account already exist!! Please Login....")
        } else {
            const newUser = new users({
                username, email, password, github: "", linkedin: "", profile: ""
            })
            await newUser.save()
            res.status(200).json(newUser)

        }
    } catch (error) {
        res.status(401).json(`Register API Failed Error :${error}`)
    }

    res.status(200).json("Register Request received")
}

// login

exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log(`inside login controller function`);
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            // generate token using jwt 
             const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret)
            res.status(200).json({existingUser,token})
        } else {
            res.status(406).json("Invalid Email or Password")


        }
    } catch (error) {
        res.status(401).json(`Register API Failed Error :${error}`)
    }

}


// updateprofile

exports.editUser=async(req,res)=>{
    const userId = req.payload
    const {username,email,password,github,linkedin,profileImage} =req.body
    const profile = req.file?req.file.filename:profileImage

    try {
        const updateUser = await users.findByIdAndUpdate({_id:userId},{ username, email, password, github, linkedin, profile

        },{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(401).json(err)
    }
}

// https://github.com/adhila
// https://www.linkedin.com/in/adila