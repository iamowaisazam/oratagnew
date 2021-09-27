import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Footer from '../components/Footer'

export default function Home({products}) {
  
   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }

  return (
    <>
        <Head>
            <title>Login</title>
        </Head>

          <div id="main-content">
            <div className="page-heading">
              <div className="page-title">
                <div className="row">
                  <div className="col-12 col-md-6 order-md-1 order-last">
                    <h3>Vertical Layout with Navbar</h3>
                    <p className="text-subtitle text-muted">Navbar will appear in top of the page.</p>
                  </div>
                  <div className="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Layout Vertical Navbar
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <section className="section">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Example Content</h4>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas omnis
                    laudantium tempore
                    exercitationem, expedita aspernatur sed officia asperiores unde tempora maxime odio
                    reprehenderit
                    distinctio incidunt! Vel aspernatur dicta consequatur!
                  </div>
                </div>
              </section>
            </div>
           <Footer />
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
