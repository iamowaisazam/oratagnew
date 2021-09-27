import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'


export default function Home({products}) {
  
   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

   const Handle = (e) => {

     e.preventDefault();
     alert('sibmit');

   }

  return (
     <>
        <Head>
            <title>Settings</title>
        </Head>
        <div id="main-content" className="px-1 py-0 bg-white" >
        <div className="card card-custom gutter-b">
          <div className="px-1 py-6 card-body">
            <form method="post" action="https://oratag.herokuapp.com/admin/oratags/settings/submit">
              <div className="container-fluid">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">OraBase ID</label>
                  <div className="col-sm-10">
                    <input defaultValue={1777} autoComplete="off" name="orabase_id" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">OraWan ID</label>
                  <div className="col-sm-10">
                    <input defaultValue={2777} autoComplete="off" name="orawan_d" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Color</label>
                  <div className="col-sm-10">
                    <input defaultValue="37777dfdfdfdf" autoComplete="off" name="led_color" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Pattern</label>
                  <div className="col-sm-10">
                    <input defaultValue="4777fdfdfdfdfdf" autoComplete="off" name="led_pattern" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">LED Repeat</label>
                  <div className="col-sm-10">
                    <input defaultValue={5777} autoComplete="off" name="led_repeat" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Tone</label>
                  <div className="col-sm-10">
                    <input defaultValue={6777} autoComplete="off" name="sound_tone" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Pattern</label>
                  <div className="col-sm-10">
                    <input defaultValue={7777} autoComplete="off" name="sound_pattern" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Sound Repeat</label>
                  <div className="col-sm-10">
                    <input defaultValue={8777} autoComplete="off" name="sound_repeat" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Low Battery Threshold (volts)</label>
                  <div className="col-sm-10">
                    <input defaultValue={9777} autoComplete="off" name="low_battery_threshold" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Low Temp Alert</label>
                  <div className="col-sm-10">
                    <input defaultValue={10777} autoComplete="off" name="low_temp_alert" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">High Temp Alert</label>
                  <div className="col-sm-10">
                    <input defaultValue={100} autoComplete="off" name="high_temp_alert" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Selected FW Config </label>
                  <div className="col-sm-10">
                    <input defaultValue={7777} autoComplete="off" name="selected_fw_config" className="form-control" type="text" />
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
              </div>  
            </form>    
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
