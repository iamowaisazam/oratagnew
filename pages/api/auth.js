import {query} from "../../utils/db";
import jwt  from "jsonwebtoken";

export default async function handler(req, res) {

    const {token} =  req.body;
    if(token == undefined){
        return res.status(301).json({ errors: "Token Required"});
    }

    try {

        var {id} = await jwt.verify(token,process.env.JWT_SECRET);      
    } catch (error) {
        return res.status(301).json({ errors: "Expired Token"});
    }
  
    const results = await query({queries:"SELECT * FROM users where id='"+id+"' "});
    if(results.length === 0){
        return res.status(301).json({ errors: "User Not Found"});
    }

    return res.status(200).json(results[0]);
    
}