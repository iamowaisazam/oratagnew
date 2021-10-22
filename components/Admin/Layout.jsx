import Header from './Header';
import Sidebar from './Sidebar';
import Head from 'next/head';
import React,{useState,useEffect} from 'react';

export default function Layout({ title, children, auth }) {


  return (
      <>

      <Head>
        <title>{title ? `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}` :  `${process.env.NEXT_PUBLIC_APP_NAME}` }</title>
      </Head>

      <style global  jsx>{`

            .sidebar-wrapper{
              background: #1E1E2D;
                color: white;
            }

            .sidebar-wrapper .menu .sidebar-link {
              color: #fbfbfb;
            }

            .header{
              background: white!important;
            }

            .sidebar-wrapper .menu .sidebar-link:hover {
              background-color: #3452cc;
            }

            #main {
              margin-left: 0px;
            }

            .sidebar-wrapper {
              width: 245px;
            }

            .sidebar-wrapper .sidebar-header {
              font-size: 2rem;
              font-weight: 700;
              padding: 21px 25px;
            }

            .sidebar-backdrop{
              display: none!important;
            }

            .button-link{
              cursor: pointer;
            }

            .mainLoader{
              display: block;
              text-align: center;
            }

      
        `}</style>


                <Sidebar />
               <div id="main" className="layout-navbar">
                 <Header auth={auth} />
                 {children}
              </div>
  
     </>);
}