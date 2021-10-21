// import mysql from 'mysql'
// var db_config ={
//   connectionLimit : 10,
//   host:"207.174.215.159",
//   user:"coderzla_nodejs",
//   password:"UTGgn~{Z!jfW",
//   database:"coderzla_nodejs",
//   dateStrings:true,
// };

// var db = mysql.createPool(db_config);
// // con.connect(function(err) {
// //   if (err) throw err;  
// // });
// export default db;

import mysql from 'serverless-mysql'
export const db = mysql({
  config: {
    host: "207.174.215.159",
    database: "coderzla_nodejs",
    user: "coderzla_nodejs",
    password: "UTGgn~{Z!jfW",
    port:3306,
  },
})

export async function query({queries,values}) {
  try {

   
    const results = await db.query(queries,values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}