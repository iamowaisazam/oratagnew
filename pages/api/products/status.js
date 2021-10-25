import {query} from "../../../utils/db";

export default async function handler(req, res) {

    const id = req.query.id;
    let status = req.query.status;

    let sql1 = `UPDATE transactions SET activate_status='${status}' WHERE id='${id}'`; 
    await query({queries: sql1});

    return res.status(200).json(id);
}