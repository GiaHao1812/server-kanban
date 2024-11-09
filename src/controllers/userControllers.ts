import dotenv from 'dotenv'
import UserModel from "../models/UserModels";
import bcrypt from 'bcrypt'

dotenv.config();
const register = async (req: any, res: any) => {
    const body = req.body;
    const {name, email, password} = body;
    try {
      const user = await UserModel.findOne({email})

      if(user){
        throw new Error('Email already exist')
      }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        body.password = hashedPassword;

        const newUser = new UserModel(body)
        await newUser.save()

        // delete newUser._doc.password;

        res.status(201).json({
            message : 'Register',
            data:newUser,
        })
    } catch (error : any) {
        res.status(404).json({
            message : error.message
        })
    }
}
export default register;