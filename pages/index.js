import {parseCookies} from 'nookies'
import {Spinner } from 'react-bootstrap';
import React,{useState} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { verify_token } from '../utils/helper';


export default function Home() {
   
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   if(router.isFallback){
       return <div>Loading</div>
   }

   const handle = async (e) => {
  
        setLoading(true);
        e.preventDefault();

        const auth = {
             username:e.target.username.value,
             password:e.target.password.value,
        };

        try {
         
          let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/login',auth);
          toast.success('You Are Logedin Now');
          let data = response.data;
          Cookies.set('auth',JSON.stringify(data));

           setLoading(false);
           router.push('/admin/');
        } catch (error) {

          let errors = error.response.data.errors;
           setLoading(false);
           toast.error(errors != undefined ? errors : 'Invalid Password' );
        }
      
   }



  return (<>
    <Head>
        <title> {process.env.NEXT_PUBLIC_APP_NAME} - Login</title>
    </Head>

    <div id="auth">
       <div style={{'height':'100vh'}} className="container m-auto " >
       <div className="row h-100">
          <div className="col-12 col-md-8 m-auto py-5">
            <div className="text-center" >
            <h1 className="auth-title py-2">Welcome to {process.env.NEXT_PUBLIC_APP_NAME} </h1>
            <form onSubmit={handle} >
                <div className="form-group position-relative has-icon-left mb-4">
                  <input required type="text" name="username" className="form-control form-control-xl" placeholder="Username" />
                  <div className="form-control-icon"><i className="bi bi-person" /></div>
                </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input required name="password" type="password" className="form-control form-control-xl" placeholder="Password" />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock" />
                  </div>
              </div>
              {loading == true ?<Spinner size="md" animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>:<button type="submit" className="btn btn-primary btn-block btn-lg shadow-lg mt-3">Sign In</button> }
            </form>   
         </div>
        </div>
      </div>
    </div>    
  </div>
 </>)

}


export async function getServerSideProps(ctx) {
      const {res} = ctx
      const {auth} = parseCookies(ctx);
      const token = await verify_token(auth);

      if(token != false){
       
        res.writeHead(301,{Location:"/admin/"})
        res.end();
     }

  

  const products = null;
  return {
      props:{
          products,
         
      }
  }

}