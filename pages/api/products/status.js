import {query} from "../../../utils/db";

export default async function handler(req, res) {

    const id = req.body.id;
    id.forEach( async element => {
        let sql1 = `UPDATE transactions SET activate_status='true' WHERE id='${element}'`; 
        await query({queries: sql1});       
    });
    
    return res.status(200).json(id);
}