import axios from "axios";
import Cookies from 'js-cookie'


export const  set_auth =  () => async (dispatch) => {

     const token = JSON.parse(Cookies.get('auth'));

     debugger
     if(token != undefined){

        try {

            let result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/auth',{token});
            dispatch({
                type:'set_auth',
                payload:result.data,
            }); 
           
        } catch (error) {

                dispatch({
                        type:'set_auth',
                        payload:null,
                }); 

        }

     }
}