import { useEffect } from 'react';
import Router  from "next/router";
import store from '../store/index';
import {Provider } from 'react-redux';




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
  console.log(url);
}

Router.onRouteChangeComplete = url => {
  NProgress.done();
}

Router.onRouteChangeError = url => {
  NProgress.done();
}



function MyApp({ Component, pageProps }) {

  useEffect(() => {

     console.log(store.getState());

  }, []);

  return (<>
             <Provider store={store} >
              <div className="">
                      <Component {...pageProps} />
               </div>
                <ToastContainer autoClose={2000}/>
              </Provider>
        </>);
}

export default MyApp;