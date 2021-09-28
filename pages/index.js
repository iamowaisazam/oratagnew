import React,{useEffect} from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Layout from '../components/Admin/Layout';
import axios from 'axios';


export default function Home({products}) {
   
   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

   useEffect( async () => {
         
    console.log(process.env.NEXT_PUBLIC_APP_NAME);



   },[]);

   const Handle = (e) => {

     e.preventDefault();
     alert('sibmit');

   }

  return (
     <>
        <Head>
            <title>Assign OraTag</title>
        </Head>
        <Layout>
        <div id="main-content" className="px-1 py-0 bg-white" >
          <div className="mb-0 card card-custom gutter-b">
          <div className="px-1 py-6 card-body">
              <form method="post" onSubmit={Handle} >
                <div className="container-fluid">
                  <div className="row">
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">First Name</label>
                      <input placeholder="Enter Your First Name" autoComplete="off" name="title_name" className="form-control" type="text" required />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Last Name</label>
                      <input placeholder="Enter Your Last Name" autoComplete="off" name="last_name" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Middle Name</label>
                      <input placeholder="Enter Your Middle Name" autoComplete="off" name="middle_name" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Cust #</label>
                      <input placeholder="Enter Your Cust" autoComplete="off" name="cust" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Order #</label>
                      <input placeholder="Enter Your Order" autoComplete="off" name="order" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Street</label>
                      <input placeholder="Enter Your Street" autoComplete="off" name="street" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">City</label>
                      <input placeholder="Enter Your City" autoComplete="off" name="city" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">State</label>
                      <select name="state" id="select" className="form-control">
                        <option value={0}>Please Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">Zip code</label>
                      <input placeholder="Enter Your Zip Code" autoComplete="off" name="zip" className="form-control" type="text" />
                    </div>
                    <div className="py-3 col-md-4">
                      <label className="col-form-label">DOB</label>
                      <input placeholder="Enter Your DOB" autoComplete="off" name="dob" className="form-control" type="date" />
                    </div>
                    <div className="py-3 col-md-4 align-self-end ">
                      <input type="submit" className="d-block form-control btn btn-danger" defaultValue="Submit" />
                    </div>
                  </div>
                </div>  
              </form>    
            </div>
          </div>
      </div>
      </Layout>
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
