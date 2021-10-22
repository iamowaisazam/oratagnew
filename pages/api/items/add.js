import {query} from "../../../utils/db";

export default async function handler(req, res) {

    const items = req.body.data;
    const id = req.body.id;
    let oratag = Math.floor(Math.random() * 10000000);

    let sql1 = `UPDATE transactions SET status='Assigned', oratag='${oratag}' WHERE id='${id}'`; 
     await query({queries: sql1});

 

   let sql = `DELETE FROM items WHERE transaction_id=${id}`; 
    await query({queries: sql});
    
    items.forEach( async element => {
            
        let sql = `INSERT INTO items (transaction_id,bar_code,description) VALUES(?,?,?)`; 
        const results = await query({
            queries: sql,
            values:[element.transaction_id,element.bar_code,element.des],
        });

    });
  
    return res.status(200).json(id);
}