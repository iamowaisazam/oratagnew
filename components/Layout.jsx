import  { Html, Main, NextScript } from 'next/document'
import Head from "next/head";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';





export default function Layout(props) {

  return (<>
             <div id="app">
             <Sidebar />
             <div id="main" className="layout-navbar">
                <Header/>
                 {props.children}
              </div>
            </div>
         </>);
}