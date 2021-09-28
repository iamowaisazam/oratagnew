import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Layout from '../components/Admin/Layout';
import axios from 'axios';

export default function Home() {

   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

   const handle = (e) => {
      e.preventDefault();

        const auth = {
          username:e.target.username.value,
          password:e.target.password.value,
        }

      axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/login',auth)
      .then(function (response) {

        console.log(response);

      }).catch(function (error) {

        alert((error.response.data.errors));
      });
      
   }

  return (
    <>
    <Head>
        <title> OraTag - Login</title>
    </Head>

    <div id="auth">
       <div style={{'height':'100vh'}} className="container m-auto " >
       <div className="row h-100">
          <div className="col-12 col-md-8 m-auto py-5">
            <div className="text-center" >
            <h1 className="auth-title py-2">Welcome to OraTag </h1>
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
              <button type="submit" className="btn btn-primary btn-block btn-lg shadow-lg mt-3">Sign In</button>
            </form>   
         </div>
        </div>
      </div>
    </div>    
  </div>
 </>
    )

}


export async function getStaticProps(){

  const products = null;
  return {
      props:{
          products,
      }
  }

}
