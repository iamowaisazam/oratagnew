import axios from "axios";
import Cookies from 'js-cookie'


export const  set_auth =  () => async (dispatch) => {
    console.log('auth Trigger');
    
    
     let token = Cookies.get('auth');

     if(token != undefined){
        

        token = JSON.parse(token);
        
    
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
                    Cookies.remove('auth');
            }

        
    }
}