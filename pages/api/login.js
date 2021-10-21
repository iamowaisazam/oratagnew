import {query} from "../../utils/db";
import { create_token } from "../../utils/helper";

export default async function handler(req, res) {

    const {username,password} =  req.body;
    const results = await query({queries:"SELECT * FROM users where name='"+username+"' AND password='"+password+"' "});

    if(results.length === 0){
        return res.status(301).json({ errors: "Wrong Email Or Password"});
    }

    let user = results[0];
    const token = await create_token(user);
    return res.status(200).json(token);

}