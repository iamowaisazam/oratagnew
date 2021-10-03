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
              page:oldpage
            }});

            console.log(response.data);
            setrenData(response.data);
            setLoading(false);
            
            
          } catch (error) {
            console.log(error);
            let errors = error.response.data.errors;
            setLoading(false);
            toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
          
          }

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
                            <th className>#</th>
                            <th className>First <br /> Name</th>
                            <th className>Middle</th>
                            <th className>Last <br /> Name</th>
                            <th className>Street</th>
                            <th className>City</th>
                            <th className>State</th>
                            <th className>Zip</th>
                            <th className>Cust#</th>
                            <th className>Date <br /> &amp;  Time</th>
                            <th className>transactions <br /> Status</th>
                            <th className>OraTag#</th>
                            <th className>Activate <br /> Status</th>
                            <th className>Select</th>
                        </tr>
                        
                      </thead>
                      <tbody style={{"word-break": "break-word"}} >
                     

                      
                      { 
                        
                        renData != false ? renData.data.map((item,i,arr) => {

                        return <tr key={i} className="odd gradeX" >
                                    <td style={{"width":"40px"}} className="detailrow " >{item.id} </td>
                                    <td style={{"width":"100px"}} className="detailrow " > {item.first_name  } </td>
                                    <td style={{"width":"100px"}}  className="detailrow " > {item.last_name } </td>
                                    <td style={{"width":"100px"}} className="detailrow " > {item.middle_name  } </td>
                                    <td className="detailrow " > {item.street  } </td>
                                    <td className="detailrow " > {item.city  } </td>
                                    <td className="detailrow " > {item.state  } </td>
                                    <td className="detailrow " > {item.zip_code  } </td>
                                    <td className="detailrow " > {item.cust  } </td>
                                    <td className="detailrow " > {item.date  } </td>
                                    <td className="detailrow " > {item.status  } </td>
                                    <td className="detailrow " > {item.oratag  } </td>
                                    <td className="detailrow " > {item.activate_status  } </td>
                                    <td className=" "><input className="form-control" type="checkbox" /></td>      
                                </tr>
                              })
                        : '' 
                        }

                      

                        
                      </tbody>
                    </table>
                    }
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
   
    res.writeHead(301,{Location:"/login"})
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