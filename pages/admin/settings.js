
import {useRouter} from 'next/router'
import Layout from '../../components/Admin/Layout';
import { verify_token } from '../../utils/helper';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
export default function Home(props) {
  const {auth} = props;
  
  const [loading, setLoading] = useState(false);
  const [renData, setrenData] = useState({});

   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

   useEffect(() => {

     setData();

   }, [])


   const setData = async () => {
     setLoading(true);
      try {                          
            let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/settings');
            console.log(response.data);
            setrenData(response.data);
            setLoading(false);
      } catch (error) {
             setLoading(false);
            toast.error(errors != undefined ? errors : 'Found Error Contact To Developer' );
      }
   }

   const Handle = async (e) => {
     e.preventDefault();

     let data = {
        high_temp_alert: e.target.high_temp_alert.value,
        id: e.target.id.value,
        led_color: e.target.led_color.value,
        led_pattern: e.target.led_pattern.value,
        led_repeat: e.target.led_repeat.value,
        low_battery_threshold: e.target.low_battery_threshold.value,
        low_temp_alert: e.target.low_temp_alert.value,
        orabase_id: e.target.orabase_id.value,
        orawan_d: e.target.orawan_d.value,
        selected_fw_config: e.target.selected_fw_config.value,
        sound_pattern: e.target.sound_pattern.value,
        sound_repeat: e.target.sound_repeat.value,
        sound_tone: e.target.sound_tone.value,
     };

      try {

        let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/settings/update',{
          params:data
        });

        setData();

      } catch (error) {
        console.log(error);
            // toast.error(error != undefined ? errors : 'Found Error Contact To Developer' );
      }

   }

  return (<Layout auth={auth}>
        <div id="main-content" className="px-1 py-0 bg-white" >
        <div className="card card-custom gutter-b">
          <div className="px-1 py-6 card-body">
            <form onSubmit={Handle} >
           
              <div className="container-fluid">
              {
               loading == true ? <div className="text-center" > <Spinner style={{ width: '5rem', height: '5rem' }} size="md" animation="border" role="status"  /> </div>   : <>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">OraBase ID</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.orabase_id} name="orabase_id" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">OraWan ID</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.orawan_d} name="orawan_d" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Color</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.led_color}  name="led_color" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Pattern</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.led_pattern}  name="led_pattern" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Repeat</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.led_repeat} name="led_repeat" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Tone</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.sound_tone}  name="sound_tone" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Pattern</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.sound_pattern} name="sound_pattern" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Repeat</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.sound_repeat} name="sound_repeat" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Low Battery Threshold (volts)</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.low_battery_threshold} name="low_battery_threshold" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Low Temp Alert</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.low_temp_alert} name="low_temp_alert" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">High Temp Alert</label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.high_temp_alert}  name="high_temp_alert" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Selected FW Config </label>
                  <div className="col-sm-10">
                    <input defaultValue={renData.selected_fw_config}  name="selected_fw_config" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <input type="submit" className=" btn btn-success" defaultValue="Submit" />
                  </div>
                  <div className="col-sm-10">
                    <input type="button" className=" btn btn-danger" defaultValue="Export DB" />
                  </div>
                </div>
              </> }
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