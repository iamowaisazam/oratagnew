const initState = {
    auth:null,
  };
  
  const AuthReducer = (state = initState, action) => {
  
      switch(action.type){
                  
        //_____________ Get Cart
        case 'set_auth': {
        
        let auth = action.payload;
        return {
                ...state, 
                 auth:auth,
               }
   
               
        // Default
          } default : {
             return state;
          }

      }

  }
  export default AuthReducer;