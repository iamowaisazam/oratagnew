import React,{useState,useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../components/Admin/Layout';
import { parseCookies } from 'nookies';
import { verify_token } from '../../../utils/helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
export default function Index(props) {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [renData, setrenData] = useState(false);

    const {auth} = props;
    const router = useRouter();
    if(router.isFallback){
       return <div>Loading</div>
    }

    useEffect(  ()  => {
      sendData(page);
      

    },[])

    const sendData = async (oldpage) => {

      setLoading(true);

      setPage(oldpage);

     let search = document.querySelectorAll('.mysearch')[0];
     let status = document.querySelectorAll('.mystatus')[0];

          try {
                
            let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/products',{params:{
              search:search.value,
              status:status.value,
              page:oldpage,
              auth:auth.id
            }});

            setrenData(response.data);
            setLoading(false);
            
            
          } catch (error) {
            console.log(error);
            let errors = error.response.data.errors;
            setLoading(false);
            toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
          
          }

    };


  //   const deschangehandle = async (e) => {

  //     try {        
  //       let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/products/status',{params:{
  //         status:e.target.checked,
  //         id:e.target.name
  //       }});

  //     } catch (error) {
  //       let errors = error.response.data.errors;
  //       toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
  //     }

  //  }


   const handle_cancel = () => {

     let box = document.querySelectorAll('.mybox');
     if(box[0]){
        box.forEach((element) => {
          element.checked = false;
        })
     }

   }



   const activate = async () => {

       setLoading(true);

        let ids = [];
        let box = document.querySelectorAll('.mybox');
        if(box[0]){
          box.forEach((element) => {
            if(element.checked == true ){
                ids.push(element.getAttribute('data-id'));
              }
          })
        }


        try {        
               let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/products/status',{id:ids});
                console.log(response);
                sendData(page);
        
        } catch (error) {
            let errors = error.response.data.errors;
            toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
            setLoading(false);
        }

    








   }


   const view = (id) => {

      router.push('/admin/products/view/'+id);
   
   };



  return (
      <Layout auth={auth} title="Search" >
        <div id="main-content">
          <div className="mb-0 card card-custom gutter-b">
              <div className="px-2 py-6 card-body">
              <div className="px-2 container-fluid">
               <div className="row">
                <div className="col-12">
                <div className="p-6">
                    <div className="row">
                      <div className="col-md-5 py-2 ">
                        <input defaultValue={''} name="search" className="form-control mysearch" type="text" placeholder="Search" />
                      </div>
                      <div className="col-md-5 py-2 ">
                        <select  name="status" className="form-control mystatus">
                            <option value="All">All</option>
                            <option value="Assigned">Assigned</option>
                            <option value="Assign-Overwrite">Assign-Overwrite</option>
                            <option value="Overwritten">Overwritten</option>
                            <option value="Retrieved">Retrieved</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="In-Progress">In Progress</option>
                        </select>
                      </div>
                      <div className="col-md-2 py-2 ">
                         <button onClick={() =>sendData(page)} className="btn  btn-danger  ">Search</button>
                      </div>
                    </div>
                </div>
                <div style={{"height":"275px"}} className="table-responsive" >
                  
               
                { loading == true ? <div className="pt-5 mainLoader" > <Spinner style={{ width: '5rem', height: '5rem' }} size="md" animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> </div>  : <table className="table table-checkable" id="my_datatable">
                      <thead>
                        <tr>
                            <th>#</th>
                            <th>First <br /> Name</th>
                            <th>Middle</th>
                            <th>Last <br /> Name</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Cust#</th>
                            <th>Date <br /> &amp;  Time</th>
                            <th>transactions <br /> Status</th>
                            <th>OraTag#</th>
                            <th>Activate <br /> Status</th>
                            <th>Action</th>
                        </tr>
                      </thead>
                     
                      <tbody style={{"wordBreak": "break-word"}} >
                      { renData != false ? renData.data.map((item,i,arr) => {
                           
                       return <tr  key={i} className="odd gradeX" >
                                    <td onClick={() => view(item.id)} style={{"width":"40px"}} className="detailrow " > {item.id} </td>
                                    <td onClick={() => view(item.id)} style={{"width":"100px"}} className="detailrow " > {item.first_name  } </td>
                                    <td onClick={() => view(item.id)} style={{"width":"100px"}}  className="detailrow " > {item.last_name } </td>
                                    <td onClick={() => view(item.id)} style={{"width":"100px"}} className="detailrow " > {item.middle_name  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.street  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.city  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.state  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.zip_code  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.cust  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.date  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.status  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.oratag  } </td>
                                    <td onClick={() => view(item.id)} className="detailrow " > {item.activate_status  } </td>
                                    <td> <input className="mybox" type="checkbox" name={item.id} data-id={item.id} /> </td>      
                                </tr>
                              })
                        : '' 
                        }</tbody></table>}
                  </div>
                 </div>
               </div>
             </div>
             <div style={{marginTop: '52px'}} className="text-center">
               { 
                 
                 renData != false ? renData.pager.pages.map((button,key,arr) => {
                   
                   if( renData.pager.currentPage == button ){
                    return <button onClick={() =>  sendData(button)} key={key} type="submit" className="mx-1 btn  btn-primary">{button}</button>
                   }else{
                    return <button onClick={()=> sendData(button)} key={key} type="submit" className="mx-1 btn  btn-danger">{button}</button>
                   }

                 }) : '' 
               
               }
            </div>

            <div style={{marginTop: '52px'}} className="text-center container ">
                <div className="row" > 
                  <div className=" text-right col-md-2 align-self-end " > <button onClick={handle_cancel} className="d-block btn btn-danger" >Cancel</button> </div>
                  <div className="col-md-8 text-left " > <label className=" custom-label text-left d-block font-weight-bold" > Retrieve Status </label><input readOnly type="text" value="" className="w-100 form-control" placeholder="Activate Oratags"  /> </div>
                  <div className="col-md-2 align-self-end " ><button onClick={activate}  className="d-block btn btn-success" >Activate Oratags</button>  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
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