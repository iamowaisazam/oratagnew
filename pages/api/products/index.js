import {query} from "../../../utils/db";
import paginate from "jw-paginate";


export default async function handler(req, res) {
    
    let sql = `SELECT * FROM transactions where user_id=${req.query.auth}`;

    if (req.query.status != undefined && req.query.status !== 'All') {
        sql += ' and status = "'+req.query.status+'" ';
      }
    
    if (req.query.search != undefined && req.query.search !== '') {
        
        sql += ' and first_name LIKE "%'+req.query.search+'%" ';
        sql += ' or last_name LIKE "%'+req.query.search+'%" ';
        sql += ' or middle_name LIKE "%'+req.query.search+'%" ';
        sql += ' or street LIKE "%'+req.query.search+'%" ';
        sql += ' or city LIKE "%'+req.query.search+'%" ';
        sql += ' or state LIKE "%'+req.query.search+'%" ';
        sql += ' or zip_code LIKE "%'+req.query.search+'%" ';
        sql += ' or cust LIKE "%'+req.query.search+'%" ';
        sql += ' or date LIKE "%'+req.query.search+'%" ';
        sql += ' or oratag LIKE "%'+req.query.search+'%" ';
        sql += ' or activate_status LIKE "%'+req.query.search+'%" ';

    }


    const results = await query({queries: sql});
    const page = parseInt(req.query.page) || 1;
    const pageSize = 5;
    const pager = paginate(results.length, page, pageSize);
    const pageOfItems = results.slice(pager.startIndex, pager.endIndex + 1);




    // if(results.length === 0){
    //     return res.status(301).json({ errors: "Wrong Email Or Password"});
    // }

    return res.status(200).json({ pager:pager,data:pageOfItems,});

}