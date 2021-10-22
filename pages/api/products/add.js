import {query} from "../../../utils/db";
import uuid from 'uuid';

export default async function handler(req, res) {
      
    const {first_name,last_name,middle_name,cust,orders,street,city,state,zip_code,dob,user_id} = req.body;

    let transaction_id = Math.floor(Math.random() * 10000000);

        try {
            
            const results = await query({
                queries: 'INSERT INTO transactions (first_name, last_name, middle_name, cust, orders,street,city,state,zip_code,dob,transaction_id,user_id) VALUES(?, ?, ?, ?, ?,?,?,?,?,?,?,?)',
                values:[first_name, last_name, middle_name, cust, orders, street, city, state, zip_code, dob, transaction_id , user_id],
        
             });
                          
             return res.status(200).json(results.insertId);
            
        } catch (error) {
           
            return res.status(301).json({ errors: "Found Error Please Contact To Admin"});

        }


}