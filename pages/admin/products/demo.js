import React,{useState,useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../components/Admin/Layout';
import { parseCookies } from 'nookies';
import { verify_token } from '../../../utils/helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import PageLoader from 'next/dist/client/page-loader';
export default function Index(props) {

  const router = useRouter();
  if(router.isFallback){
     return <div>Loading</div>
  }

  const {auth,product} = props;
  const [items, setItem] = useState([]);
  const [Loading, setLoading] = useState(false);

  
  useEffect( async () => {


       let asd = await getItems();
        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }

  },[]);


  const handleKeyDown = async (e) => {
        if(e.key == "Enter" || e.key == "ArrowDown" ){
          add();
        }
  } 
  
  const getItems = async () => {
    setLoading(true);
    let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/items',{params:{id:product.id}});
    setItem(response.data);
    setLoading(false);
  } 


  const del = async (id) => {
      setLoading(true);
      try {  
        
        let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/items/delete',{params:{id:id}});    
        toast.success('Item Deleted');
        setLoading(false);
        getItems();

      } catch (error) {
        let errors = error.response.data.errors;
        toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
        setLoading(false);
      }
  } 


  const add = async () => {
        setLoading(true);
        
        // try {  

         let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/items/add',{params:{id:product.id}});      
         let dd = await getItems();
         let ddc = document.querySelectorAll(`.myitem${response.data}`)[0].focus();
         setLoading(false);

        // } catch (error) {
        //     let errors = error.response.data.errors;
        //     toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
        //     setLoading(false);
        // }
  } 


  const cc = async (e) => {

      let barcode = document.querySelectorAll(`.myitem${e}`)[0].value;
      let des = document.querySelectorAll(`.myitemdes${e}`)[0].value;

      // setLoading(true);
      // try {  

        let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/items/update',{params:
          {
            id:e,
            barcode:barcode,
            des:des
          },
        });
        
      console.log(response);
      // setLoading(false);
      // } catch (error) {
      //           let errors = error.response.data.errors;
      //           toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
      //           setLoading(false);
      // }

  }


  return (
      <Layout auth={auth} title={product.first_name} >
        <div id="main-content" className="px-1 py-0 bg-white" >
              <div className="mb-0 card card-custom gutter-b">
              <div className="px-1 py-6 card-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="py-3 col-md-3">
                          <label className="col-form-label"> First Name</label>
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
                    <div style={{'borderTop': '1px solid #C8CED3','borderBottom': '1px solid #C8CED3'}} class="row my-2 py-1 ">  
                          <div className="py-3 col-md-2 align-self-end ">
                                  <label className="col-form-label">Transaction#</label>
                          </div>
                          <div className="py-3 col-md-10 align-self-end ">
                              <input defaultValue={product.transaction_id}  disabled autocomplete="off"  className="form-control" type="text" />
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
                          <div className="text-center col-6 col-sm-1 text-sm-left align-self-center  ">
                            <button style={{background:'white',border:' none'}} onClick={() => add()} > <i className="menu-icon add-icon  fas fa-plus" /></button> 
                          </div>
                      </div> 
                        {
                          Loading == true ? 
                          <div className="row" > <div className="col-12 text-center py-5 " > <Spinner style={{ width: '5rem', height: '5rem' }} size="md" animation="border" role="status"  /> </div> </div>  :

                            items.length > 0  ? items.map((item,i,arr) => {

                                return <div key={i}  className="my-5 row">
                                          <div className="col-md-1 text-center text-sm-left">
                                              <label className="col-form-label">{i + 1}</label>
                                          </div>
                                          <div className="my-2 col-md-5">
                                              <input onBlur={() => cc(item.id)}  defaultValue={item.bar_code} className={`myitem${item.id} form-control`} type="text" />
                                          </div>
                                          <div className="my-2 col-md-5">
                                              <input onBlur={() => cc(item.id)} defaultValue={item.description} className={` myitemdes${item.id} form-control`} type="text" />
                                          </div>
                                          <div class="col-md-1 text-center text-sm-left align-self-center ">
                                            <button style={{background:'white',border:' none'}} onClick={() => del(item.id)} ><i className="menu-icon  fas fa-trash-alt remove-icon "></i></button> 
                                          </div>
                                     </div> 
                                  })
                              : '' 
                          } 

                  </div>

                  <div className="bottom-area container-fluid">
                    <div className=" row my-2 py-1 ">  
                        <div className="py-3 col-md-2 text-center text-sm-left align-self-end ">
                            <Link href="/admin/home" ><a className="btn btn-danger" >Cancel</a></Link>
                        </div>
                        <div className="py-3 col-md-5 align-self-end ">
                            <label>Assign Status</label>
                            <input readOnly className="form-control" type="text" value="Pending" />
                        </div>
                        <div className="py-3 col-md-5 align-self-end ">
                            <label>OraTag#</label>
                            <input readOnly className="form-control" type="text" value="Pending" />
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