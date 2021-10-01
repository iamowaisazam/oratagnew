import {query} from "../../utils/db";
import jwt  from "jsonwebtoken";

export default async function handler(req, res) {

    const {username,password} =  req.body;
    const results = await query("SELECT * FROM users where name='"+username+"' AND password='"+password+"' ");

    if(results.length === 0){
        return res.status(301).json({ errors: "Wrong Email Or Password"});
    }

    let user = results[0];
    const token = jwt.sign({
              id: user.id,
              name: user.name,
              password: user.password,
             },process.env.JWT_SECRET,{expiresIn: '30d',});

      return res.status(200).json({token})

}