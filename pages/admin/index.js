import React,{useState} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../components/Admin/Layout';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { verify_token } from '../../utils/helper';
import { toast } from 'react-toastify';


export default function Home(props) {

   const {auth} = props;
   const router = useRouter();
   const [loading, setLoading] = useState(false);

   if(router.isFallback){
       return <div>Loading</div>
   }


   const Handle = async  (e) => {
      setLoading(true);

     e.preventDefault();
             
       let data = {
          first_name:e.target.first_name.value,
          last_name:e.target.last_name.value,
          middle_name:e.target.middle_name.value,
          cust:e.target.cust.value,
          order:e.target.order.value,
          street:e.target.street.value,
          city:e.target.city.value,
          state:e.target.state.value,
          zip:e.target.zip.value,
          dob:e.target.dob.value,
          user_id:auth.id
       };

       try {
         
        let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/products/add',data);
        router.push('/admin/products/'+response.data);
        setLoading(false);

      } catch (error) {

          let errors = error.response.data.errors;
          toast.error(errors != undefined ? errors : 'Error' );
          setLoading(false);
      }

   }

  return (<Layout title="" auth={auth} >
            <div id="main-content" className="px-1 py-0 bg-white" >
              <div className="mb-0 card card-custom gutter-b">
              <div className="px-1 py-6 card-body">
                  <form className="add-product-form"  method="post" onSubmit={Handle} >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">First Name</label>
                          <input placeholder="Enter Your First Name" name="first_name" className="form-control" type="text" required />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">Last Name</label>
                          <input placeholder="Enter Your Last Name" name="last_name" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">Middle Name</label>
                          <input placeholder="Enter Your Middle Name" name="middle_name" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">Cust #</label>
                          <input placeholder="Enter Your Cust" name="cust" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">Order #</label>
                          <input placeholder="Enter Your Order" name="order" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">Street</label>
                          <input placeholder="Enter Your Street" name="street" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">City</label>
                          <input placeholder="Enter Your City" name="city" className="form-control" type="text" />
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
                          <input placeholder="Enter Your Zip Code" name="zip" className="form-control" type="text" />
                        </div>
                        <div className="py-3 col-md-4">
                          <label className="col-form-label">DOB</label>
                          <input placeholder="Enter Your DOB" name="dob" className="form-control" type="date" />
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
   </Layout>)
}


export async function getServerSideProps(ctx) {
  const {res} = ctx
  const {auth} = parseCookies(ctx);
  const token = await verify_token(auth);

  if(token == false){
   
    res.writeHead(301,{Location:"/"})
    res.end();
 }



const products = null;
    return {
      props:{
          products,
          auth:token
      }
    }
}