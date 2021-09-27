import Head from 'next/head'
import {toast} from 'react-toastify';
import Link from 'next/link'

export default function Contact() {

  const submit = (e) => {
      
       e.preventDefault();
       document.querySelector(".myform").reset();
       toast.success("Form Submitted Successfully");
  }


  return (

    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer Skills Desktop, Mobile and Website web Native Applications,Youtuber, Php,Jquery, Ajax,Laravel,Wordpress," />
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">Our Services</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a >Home</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 card-style">
        <div className="card-style-eleven py-5 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="/images/services/traditional-application.png" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <h6>Traditional Web Appliaction</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Web Based Application Management Systems For Your Bussiness.</p>
                        <Link href="/services/traditional-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="/images/services/modern-application.png" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <h6>Modern Web Appliaction</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Modern Single Page Smart and Fast Loading Application for Your Bussiness</p>
                        <Link href="/services/modern-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure>
                    <img src="/images/services/wordpres-application.png" />
                  </figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <h6>Wordpress Application</h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Wordpress Ecommerce Content Management System. A Content Management System Is A Web Based Software.</p>
                        <Link href="/services/wordpress-website" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card card--eleven">
                  <figure><img src="/images/services/custom-web-development.png" /></figure>
                  <div className="card-body text-center">
                    <div className="card-contents">
                      <div className="content-top">
                        <h6>Repair & Custom Web Development </h6>
                      </div>
                      <div className="content-bottom">
                        <p>Offering Maintenance And Support Service For Your Site Will Be Updated We Responsible for  keeping Secure.</p>
                        <Link href="/services/custom-web-development" ><a className="btn btn-secondary btn-sm">See Details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>{/* End: .card */}
              </div>
            </div>{/* ends: .row */}
          </div>
        </div>{/* ends: .card-style-eleven */}
      </section>
      </>
  )
}
