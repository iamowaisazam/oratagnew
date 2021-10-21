import {query} from "../../../utils/db";

export default async function handler(req, res) {
    
    let sql = `SELECT * FROM transactions where id=${req.query.id}`; 
    const results = await query({queries: sql});
    return res.status(200).json(results[0]);

}