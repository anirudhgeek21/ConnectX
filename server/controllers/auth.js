import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../model/User.js';

export const register = async(req,res) =>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            friends,
            picturePath,
            pseudoName,
            communities,
            college,
            instagram,
            linkedin,
            eventsAttending
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);
        
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            friends,picturePath,
            pseudoName,
            communities,
            college,
            instagram,
            linkedin,
            eventsAttending,
        });

        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error : err.message});
    }
};

export const login = async(req,res) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({ email:email });
        if(!user) return res.status(400).json({msg:"User does not Exist."})

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({token,user});
    } catch (err) {
        res.status(500).json({error:err.message})
    }
};
