import React,{useEffect,useState} from "react";
import {Provider} from 'react-redux'
import Router  from "next/router";
import store from '../store/index';
import {set_auth} from '../store/Action';

import NProgress from 'nprogress';
import { ToastContainer, toast } from 'react-toastify';

// Custom Css
import "../styles/fontawesome.css";
import "../styles/gloabl.css";
import "../styles/custom.css";
import "../styles/responsive.css";
import 'react-toastify/dist/ReactToastify.css';




NProgress.configure({ 
  minimum: 0.5 ,
  showSpinner: false

});

Router.onRouteChangeStart = url => {
  NProgress.start();

}

Router.onRouteChangeComplete = url => {
  NProgress.done();
  console.log(Router.pathname);
}

Router.onRouteChangeError = url => {
  NProgress.done();
}



function MyApp({ Component, pageProps }) {

  useEffect(() => {

  
 



  });

  // document.addEventListener('load', function() { 
  //   // your code... 
  //   store.dispatch(set_auth());
  // }); 



  return (<Provider store={store} >
  
                <Component {...pageProps} />
                <ToastContainer autoClose={2000}/>
            
         </Provider>);
}




export default MyApp;