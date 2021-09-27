import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import {toast} from 'react-toastify';

export default function Service() {

  const handle = async (e) => {
    e.preventDefault();
  

    const params = new URLSearchParams();
    params.append('name', e.target.name.value);
    params.append('email', e.target.email.value);
    params.append('phone', e.target.phone.value);
    params.append('details', e.target.details.value);
    params.append('service', e.target.service.value);
    
    console.log(params);

    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/add_order.php`,params).then(function (response) {
      // handle success
      console.log(response);
      document.querySelector(".my-form").reset();
       toast.success(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    });


}

    const focus = () => {
    //   let ff = document.querySelectorAll('.order-form')[0].focus();

      document.location = "#order-form";
    }
 
  return (<>

      <Head>
        <title>Traditional Web Appliaction</title>
        <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer Traditional Web Appliaction Skills Desktop ,Youtuber, Php,Jquery, Ajax, Laravel " />
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">Traditional Web Appliaction </h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a>Home</a></Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">traditional-website</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>{/* ends: .row */}
        </div>
      </section>

      <div className="py-5 videos-wrapper video--one">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-lg-5 col-md-6 margin-sm-60">
              <h3 className="color-dark">What is <span>Traditional Web</span> Application ? </h3>
              <p>In Traditional Web Applications Users Can Register Login And Save The Information In Database And Application Show The Records From Database. Its used To Create Big Management Systems For Manage Data. For Example Blog ,E-Commerce, Travel Booking, LMS, Social Management Or Custom Website. There Are a lots Of Types Of Dynamic Application It Depend on Your Application Functionality.</p>
              <a onClick={focus} className="btn btn-primary btn--rounded mt-4 text-white ">Get Started</a>
            </div>
            <div className="col-lg-6 col-md-6 offset-lg-1">
                <img src="/images/components/img2.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 icon-boxes section-bg icon-box--six">
        <div className="container">
           <div className="row">
               <div className="col-12 text-center py-5 " >
                 <h1 className="section_heading" >Free Features & Benefits</h1>
            </div>
           </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-mobile-alt"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1" >Mobile Friendly</h6>
                  <p>Compatible With All Devices And Browsers</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-lock"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Secured SSL</h6>
                  <p>Verified By Google Secure Sockets Layer Certificate</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-language"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Language Translator</h6>
                  <p>Users Can Change Website Languages Dynamically</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-envelope"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Business Email</h6>
                  <p>Custom Name Email name@domain.com</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-users"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Social Accounts</h6>
                  <p>Social Account Connections With Your Application</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-copyright"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Copyright Free</h6>
                  <p>Analyzing & Copyright Duplicate Content & images.</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-images"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Logo</h6>
                  <p>Logo is a symbol that identifies a Business Or Brand</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-search"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Seo Friendly</h6>
                  <p>Connection With Google Search Engine</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-chart-bar"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1"  >Google Analytics</h6>
                  <p>Information About Your Audience Country, City, Browser Device etc</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-database"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1">Data Entry</h6>
                  <p>Information About Your Audience Country, City, Browser Device etc</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="far fa-comments"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1" >Live Chat Messenger</h6>
                  <p>Facebook Live Chat for Customer Support</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fas fa-chart-bar"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1" >Contact Form</h6>
                  <p>Users Can Submit Form And You Will Recieve on Your Email</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
            <div className="col-lg-4 col-md-6">
              <div className="my-2 icon-box-four d-flex">
                <div className="box-icon">
                  <span className="icon-rounded-sm"><i class="fab fa-accessible-icon"></i></span>
                </div>
                <div className="box-content">
                  <h6 className="my-1" >How To Use</h6>
                  <p>We Will Provide instructions Book or Video Taining How Use It.</p>
                </div>
              </div>{/* ends: .icon-box */}
            </div>{/* ends: .col-lg-4 */}
          </div>{/* ends: .row */}
        </div>
      </div>

      <section id="order-form" className=" py-5 form-wrapper contact--from5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="divider text-center m-bottom-50">
                <h1 className="section_heading color-dark m-0">Create Your Order</h1>
              </div>
              <div className="form-wrapper">
                <form className="my-form" onSubmit={handle}  >
                    <input name="service" type="hidden" value="traditional-website" />
                  <div className="row">
                    <div className="col-lg-4 col-md-6 m-bottom-30">
                      <label className="form-label text-dark" >Full name </label>
                      <input   name="name" type="text" placeholder="Your Name" className="form-control" required />
                    </div>
                    <div className="col-lg-4 col-md-6 m-bottom-30">
                       <label className="form-label text-dark" >Email </label>
                       <input name="email" type="email" placeholder="Email" className="form-control" required />
                    </div>
                    <div className="col-lg-4 m-bottom-30">
                      <label className="form-label text-dark" >Phone / whatsapp </label>
                      <input name="phone" type="text" placeholder="Number" className="form-control" required />
                    </div>
                    <div className="col-lg-12 m-bottom-20">
                      <label className="form-label text-dark" >Provide Complete Details</label> 
                      <textarea name="details" className="form-control" rows={7} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="col-lg-12 text-center m-top-30">
                      <button type="submit" className="btn btn-primary">Request Now</button>
                    </div>
                  </div>
                </form>
              </div>{/* end: .form-wrapper */}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
