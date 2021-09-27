import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
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
    
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/add_order.php`,params).then(function (response) {
      // handle success
      console.log(response);
      document.querySelector(".my-form").reset();
       toast.success(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(response.data);
    });


}

    const focus = () => {
    //   let ff = document.querySelectorAll('.order-form')[0].focus();

      document.location = "#order-form";
    }
 
  return (<>

      <Head>
        <title>Custom Web Development</title>
        <meta name="description" content="Owais Azam Technical Full Stack Front and Back End Developer Custom Web Development Skills Desktop ,Youtuber, Php,Jquery, Ajax,Laravel,Wordpress," />
      </Head>

      <section className="breadcrumb_area breadcrumb1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_wrapper d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="page_title">Custom Web Development </h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" ><a>Home</a></Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">custom-web-development</li>
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
              <h3 className="color-dark">What is <span>Custom Web</span> Development? </h3>
              <p>Website Repair and Maintenance Is Important issue. If You Have Website But its working Slow Or You Change Your business module and you also want to change your website functionality or if you found any kind of error then you need to fix so let me help with a website repair service that will transform the impression of your site from a negative to a big positive</p>
              <a onClick={focus} className="btn btn-primary btn--rounded mt-4 text-white ">Get Started</a>
            </div>
            <div className="col-lg-6 col-md-6 offset-lg-1">
                <img src="/images/components/img2.png" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-bg icon-boxes icon-box--two">
        <div className="container py-5 ">
           <div className="row">
               <div className="col-12 text-center py-3 " >
                <h1 style={{'fontSize':'42px'}}  className="section_heading" >Some Of Main Custom Service</h1>
               </div>
           </div>
        <div className="row">

          <div className="p-2 col-lg-3 col-md-6 text-center ">
            <div className="h-100 bg-white" >
              <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                <span className="text-center  d-block color-primary">
                <i className="fas fa-wrench fa-2x "></i></span>
                <h6 className="mb-0 text-center color-dark m-bottom-15"> Repair & Errors</h6>
              </div>
            </div>
          </div>

          <div className="p-2 col-lg-3 col-md-6 text-center ">
            <div className="h-100 bg-white" >
              <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                <span className="text-center  d-block color-primary">
                <i className="far fa-file-alt fa-2x "></i></span>
                <h6 className="mb-0 text-center color-dark m-bottom-15"> Custom Application Development</h6>
              </div>
            </div>
          </div>

          <div className="p-2 col-lg-3 col-md-6 text-center ">
            <div className="h-100 bg-white" >
              <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                <span className="text-center  d-block color-primary">
                <i className="fas fa-users fa-2x "></i></span>
                <h6 className="mb-0 text-center color-dark m-bottom-15">Social Media Marketing </h6>
              </div>
            </div>
          </div>

          <div className="p-2 col-lg-3 col-md-6 text-center ">
            <div className="h-100 bg-white" >
              <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                 <span className="text-center  d-block color-primary">
                  <i className="fas fa-search fa-2x " /></span>
                  <h6 className="mb-0 text-center color-dark m-bottom-15">SEO</h6>
              </div>
            </div>
          </div>

          <div className="p-2 col-lg-3 col-md-6 text-center ">
             <div className="h-100 bg-white" >
                <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                  <span className="text-center  d-block color-primary">
                  <i className="fas fa-fighter-jet fa-2x " /></span>
                  <h6 className="mb-0 text-center color-dark m-bottom-15">Speed Optimization</h6>
                </div>
              </div>
          </div>

          <div className="p-2 col-lg-3 col-md-6 text-center ">
            <div className="h-100 bg-white" >
              <div className="my-2 py-5 bg-white icon-box icon-box-two text-md-left text-center">
                <span className="text-center  d-block color-primary">
                  <i className="fas fa-pen-square fa-2x " /></span>
              <h6 className="mb-0 text-center color-dark m-bottom-15">Data Entry</h6>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      <section id="order-form" className=" py-5 form-wrapper contact--from5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="divider text-center m-bottom-50">
                <h1 className="section_heading color-dark m-0">Create Your Order</h1>
              </div>
              <div className="form-wrapper">
                <form className="my-form"  onSubmit={handle}  >
                    <input name="service" type="hidden" value="custom-website" />
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
