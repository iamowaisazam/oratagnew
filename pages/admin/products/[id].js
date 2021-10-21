import React,{useState,useEffect,useRef} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../components/Admin/Layout';
import { parseCookies } from 'nookies';
import { verify_token } from '../../../utils/helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import PageLoader from 'next/dist/client/page-loader';
import { v4 as uuidv4 } from 'uuid';

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
        if(ev == 0){   
        
           document.addEventListener('keydown', handleKeyDown);
           setEv(1);
        }
       
        // return function cleanup() {
        //   document.removeEventListener('keydown', handleKeyDown);
        // }

  },[]);


  const handleKeyDown = async (e) => {
        if(e.key == "Enter" || e.key == "ArrowDown" ){
         
        
         let li = document.querySelectorAll('.add-icon')[0].click();

        //console.log(document.getEventListeners());
        //console.table(listAllEventListeners());

        // console.log(li.keydown());

        }

  }
  
  const [value, setValue] = useState({});
  const [mdes, setDes] = useState({});

  

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

        
       await setValue(setinputs);
       await setDes(olddes);

        let sendata = {
                       ...state,
                       items:olditems
                      };
       
         await setState(sendata);
        setLoading(false);

        // document.addEventListener('keydown', handleKeyDown);
            
      
  } 


  const add = async () => {
      
    let unique = Math.floor(Math.random() * 1000);   
    let additem =[...state.items,{
        bar_code: '',
        description: '',
        id: unique
      }];

    let olditems = {...state,
                    items:additem
                   };

    await setState(olditems);

    document.querySelectorAll(`.barcode${unique}`)[0].focus();
  }  



  const del = async (id) => {
      
        let sendData = [];
        state.items.forEach(function(element,key) { 
          if(element.id != id){
            sendData.push({
                bar_code: element.bar_code,
                description: element.description,
                id: element.id
            }); 
          }
         });

        let additem = sendData;
        let olditems = {...state,items:additem};
        let step = await setState(olditems);
  } 


  const barcodechangehandle = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setValue({[name]:val})   
 }

 const deschangehandle = (e) => {

   let name = e.target.name;
   let val = e.target.value;
   setDes({[name]:val})   
}



  const handle = async (e) => {
    setLoading(true);
      
      let sendData = [];
      state.items.forEach(element => {
      let barcode = document.querySelectorAll(`.barcode${element.id}`)[0].value;
      let des = document.querySelectorAll(`.des${element.id}`)[0].value;

          sendData.push({
            bar_code:barcode,
            des:des,
            transaction_id:product.id
          });
      
      });

      try {  

          let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/items/add',{
            id:product.id,
            data:sendData
          });
          setLoading(false);
          getItems();
        
      } catch (error) {

          let errors = error.response.data.errors;
          toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
          setLoading(false);
      }

    console.log(sendData);
  
  }





  return (
      <Layout auth={auth} title={product.first_name} >
          <div id="main-content" className="px-3 py-0 bg-white" >
                <div className="mb-0 card card-custom gutter-b">
                <div className="px-1 py-6 card-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="py-3 col-md-3">
                            <label className="col-form-label">{ev} First Name</label>
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
                    <form  className="itemform"   >
                      
                      <div style={{'borderTop': '1px solid #C8CED3','borderBottom': '1px solid #C8CED3'}} className="row my-2 py-1 ">  
                            <div className="py-3 col-md-2 align-self-end ">
                                    <label className="col-form-label">Transaction#</label>
                            </div>
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
                            <div className="text-center col-6 col-sm-1 text-sm-left align-self-center  ">
                              <button type="button" style={{background:'white',border:' none'}} onClick={() => add()} > <i className="menu-icon add-icon  fas fa-plus" /></button> 
                            </div>
                        </div> 

                          {
                            Loading == true ? 
                            <div className="row" > <div className="col-12 text-center py-5 " > <Spinner style={{ width: '5rem', height: '5rem' }} size="md" animation="border" role="status"  /> </div> </div>  :

                              state.items.length > 0  ? state.items.map((item,i,arr) => {

                                 return <div key={i}  className={`my-5 row`}>
                                           <div className=" align-self-center col-md-1 text-center text-sm-left">
                                                <label className="d-block col-form-label">{i + 1 }</label>
                                           </div>
                                           <div className="my-2 col-md-5">
                                              <input name={`${item.id}`} value={ value[item.id]} 
                                                onChange={barcodechangehandle}   className={`barcode${item.id} form-control`} type="text" />
                                           </div>
                                           <div className="my-2 col-md-5">
                                                <input onChange={deschangehandle}  name={`${item.id}`} value={mdes[item.id]} className={`des${item.id} form-control`} type="text" />
                                           </div>
                                           <div className="col-md-1 text-center text-sm-left align-self-center ">
                                            <button type="button" style={{background:'white',border:' none'}} onClick={() => del(item.id)} ><i className="menu-icon  fas fa-trash-alt remove-icon "></i></button> 
                                           </div>
                                      </div> 
                                    })
                                : '' 
                            } 
                        </form>
                    </div>

                    <div className="bottom-area container-fluid">
                      <div className=" row my-2 py-1 ">  
                          <div className="py-3 col-md-2 text-center text-sm-left align-self-end ">
                              <Link href="/admin" ><a className="btn btn-danger form-control" >Cancel</a></Link>
                          </div>
                          <div className="py-3 col-md-4 align-self-end ">
                              <label className="py-2" >Assign Status</label>
                              <input readOnly className="form-control" type="text" value="Pending" />
                          </div>
                          <div className="py-3 col-md-4 align-self-end ">
                              <label className="py-2" >OraTag#</label>
                              <input readOnly className="form-control" type="text" value="Pending" />
                          </div>
                          <div className="py-3 col-md-2 align-self-end ">
                              <input onClick={handle} className="btn btn-success form-control" type="button" value="Submit" />
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