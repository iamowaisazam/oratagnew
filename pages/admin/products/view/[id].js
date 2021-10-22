import React,{useState,useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../../components/Admin/Layout';
import { parseCookies } from 'nookies';
import { verify_token } from '../../../../utils/helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

export default function Index(props) {

  const router = useRouter();
  if(router.isFallback){
     return <div>Loading</div>
  }

  const {auth,product} = props;
  const [Loading, setLoading] = useState(false);

  const [ev, setEv] = useState(0);

  const [state, setState] = useState({
    items:[]
  });
  

  useEffect( async () => {

        let asd = await getItems();
  },[]);

  const getItems = async () => {

        setLoading(true);

        let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/items',{params:{id:product.id}});
        let olditems = [];
        let setinputs = {};
        let olddes = {};
        
        await response.data.forEach( async function(element,key) { 
           let un = await Math.floor(Math.random() * 1000);
         
            await olditems.push({
                bar_code: element.bar_code,
                description: element.description,
                id: un
            }); 
          
            setinputs[un] = element.bar_code;
            olddes[un] = element.description;
        });

        let sendata = {
                       ...state,
                       items:olditems
                      };
       
         await setState(sendata);
        setLoading(false);
  } 


  return (
      <Layout auth={auth} title={product.first_name} >
          <div id="main-content" className="px-3 py-0 bg-white" >
                <div className="mb-0 card card-custom gutter-b">
                <div className="px-1 py-6 card-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">First Name</label>
                            <input readOnly placeholder="Enter Your First Name"  className="form-control" type="text" defaultValue={product.first_name} required />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Last Name</label>
                            <input readOnly placeholder="Enter Your Last Name"  className="form-control" defaultValue={product.last_name}  type="text" />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Middle Name</label>
                            <input readOnly defaultValue={product.middle_name} placeholder="Enter Your Middle Name" name="middle_name" className="form-control" type="text" />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Cust #</label>
                            <input readOnly placeholder="Enter Your Cust"   className="form-control" type="text" defaultValue={product.cust}  />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Order #</label>
                            <input readOnly placeholder="Enter Your Order"  className="form-control" type="text" defaultValue={product.order}  />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Street</label>
                            <input readOnly placeholder="Enter Your Street" className="form-control" type="text" defaultValue={product.street}  />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">City</label>
                            <input readOnly placeholder="Enter Your City"   className="form-control" type="text" defaultValue={product.city} />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">State</label>
                            <input readOnly placeholder="Enter Your State"  className="form-control" type="text" defaultValue={product.state} />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">Zip code</label>
                            <input readOnly placeholder="Enter Your Zip Code"   className="form-control" type="text" defaultValue={product.zip}  />
                          </div>
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">DOB</label>
                            <input readOnly placeholder="Enter Your DOB"  className="form-control" type="text" defaultValue={product.dob}  />
                          </div>  
                        </div>
                      </div> 

                    <div className="container-fluid" >
                      <div style={{'borderTop': '1px solid #C8CED3','borderBottom': '1px solid #C8CED3'}} className="row my-2 py-1 ">  
                            <div className="py-3 col-md-2 align-self-end "><label className="col-form-label">Transaction#</label></div>
                            <div className="py-3 col-md-10 align-self-end ">
                                <input defaultValue={product.transaction_id} disabled className="form-control" type="text" />
                            </div>
                        </div>
                        
                        <div style={{borderTop: '3px solid #fff'}} className="row">
                            <div className="text-center col-6 col-sm-1 text-sm-left align-self-center ">
                              <label className="col-form-label text-dark font-weight-bold  ">Item #</label>
                            </div>
                            <div className="text-center col-6 col-sm-5 text-sm-center align-self-center ">
                              <label className="col-form-label text-dark font-weight-bold ">Bar Code #</label>
                            </div>
                            <div className="text-center col-6 col-sm-5 text-sm-center align-self-center ">
                              <label className="col-form-label text-dark font-weight-bold  ">Description</label>
                            </div>
                            <div className="text-center col-6 col-sm-1 text-sm-left align-self-center"></div>
                        </div> 

                          {
                            Loading == true ? 
                            <div className="row" > <div className="col-12 text-center py-5 " > <Spinner style={{ width: '5rem', height: '5rem' }} size="md" animation="border" role="status"  /> </div> </div>  :

                              state.items.length > 0  ? state.items.map((item,i,arr) => {

                                 return <div key={i}  className={`my-1 row`}>
                                           <div className=" align-self-center col-md-1 text-center text-sm-left">
                                                <label className="d-block col-form-label">{i + 1 }</label>
                                           </div>
                                           <div className="my-2 col-md-6">
                                              <input readOnly value={item.bar_code} className={`form-control`} type="text" />
                                           </div>
                                           <div className="my-2 col-md-5">
                                              <input readOnly value={item.description} className={`form-control`} type="text" />
                                           </div>
                                      </div> 
                                    })
                                : '' 
                            } 
                        
                        <div className="bottom-area container-fluid">
                      <div className=" row my-2 py-1 ">  
                          <div className="py-3 col-md-2 text-center text-sm-left align-self-end ">
                        
                          </div>
                          <div className="py-3 col-md-4 align-self-end ">
                              <label className="py-2" >Assign Status</label>
                              <input readOnly className="form-control" type="text" value={product.status} />
                          </div>
                          <div className="py-3 col-md-4 align-self-end ">
                              <label className="py-2" >OraTag#</label>
                              <input readOnly className="form-control" type="text" value={product.oratag} />
                          </div>
                          <div className="py-3 col-md-2 align-self-end ">
                             <Link href="/admin" ><a className="btn btn-success form-control" >Finish</a></Link>
                          </div>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>
            </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx){

    const {res} = ctx
    const {auth} = parseCookies(ctx);
    const token = await verify_token(auth);

    if(token == false){
      res.writeHead(301,{Location:"/"})
      res.end();
    } 

    let {id} = ctx.params;
    let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/products/get',{params:{id:id}});
   
    if(response.data == ''){
      return {
        notFound: true,
      }
    }
   
    return {
      props:{
              product:response.data,
              auth:token
            }
     }

}