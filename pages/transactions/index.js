import React,{useEffect,us} from 'react';
import Head from 'next/head'
import {toast} from 'react-toastify';
import Link from 'next/link'

export default function Works({products}) {

  return (
    <>
      <Head>
        <title>Our Works</title>
        <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer. Our Works ,Youtuber, Php,Jquery, Ajax,Laravel,Wordpress," />
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">Our Works</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">our-works</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="project-grid-3 py-5 ">
        <div className="card--one">
          <div className="container">
            <div className="row">
             { products.map( (element,key) => {   
                return <div key={key} className="col-lg-4 col-sm-6">
                  <Link href={`/portfolios/${element.slug}`}  ><a>
                    <div className="card card-shadow card-one">
                      <figure>
                        <img src={element.thumbnail}  />
                        <figcaption></figcaption>
                      </figure>
                      <div className="card-body">
                        <h6>{element.title}</h6>
                      </div>
                    </div></a></Link>
                  </div>
                })
            }
         </div>
       </div>
     </div>
   </section>
  </>
  )
}


export async function getStaticProps(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);  
  const products = await res.json();  
  return {
      props:{
          products,
      }
  }

}