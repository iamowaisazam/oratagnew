import {sign,verify}  from "jsonwebtoken";

 
export const create_token = async (data) => {
  return sign({
        id: data.id,
        name: data.name,
       },process.env.JWT_SECRET,{expiresIn: '30d',});
}


export const verify_token = async (token) => {
    try {
        return verify(JSON.parse(token),process.env.JWT_SECRET);
    } catch(err) {
        return false;
    }
}





