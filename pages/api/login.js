import {query} from "../../utils/db";

export default async function handler(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    const results = await query("SELECT * FROM users where name='"+username+"' AND password='"+password+"' ");
    if(results.length > 0){
  
        return res.json(results)
  
    }else{
        return res.status(301).json({ errors: "Not Found"});
    }

}