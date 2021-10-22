import React from 'react'
import Link from 'next/link';
import router,{useRouter} from 'next/router';
import Cookies from 'js-cookie';

const Sidebar = () => {

  const routers = useRouter();


//   const submit = (e) => {
//     e.preventDefault();
//     e.target.email.value = "";
//     toast.success("Successfully Subscribed");
//  }

    const ToggleSidebar = () => {
      //alert('click');
      let Sidebar = document.querySelectorAll('#sidebar')[0];
      
      if(Sidebar.classList[0] == 'active' ){
        Sidebar.classList.remove("active");
      }else{
        Sidebar.classList.add("active");
      }
      //console.log(Sidebar.classList[0]);

    }

const logout = () => {

    Cookies.remove('auth')
    router.push('/')
  
}

return (<>
      <div id="sidebar" className="">
        <div className="sidebar-wrapper ">
          <div className="sidebar-header bg-success  ">
            <div className="d-flex justify-content-between">
              <div className="logo"><Link href="/"><a className="text-white" >Oratag</a></Link>
              <a onClick={ToggleSidebar} className=""><i className="px-3 text-dark fas fa-times-circle fs-3" /></a>
              </div>
              {/* <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
              </div> */}
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className={`sidebar-item  ${ routers.pathname  == "/admin" ? "active" : ""} `}><Link href="/admin/"><a className="sidebar-link" ><i className="fas fa-plus"></i><span>Assign Oratag</span></a></Link></li>

              <li className={`sidebar-item  ${ routers.pathname == "/admin/products" ? "active" : ""} `}><Link href="/admin/products"><a className="sidebar-link"><i className="fas fa-search-plus"></i><span>Search OraTag</span></a></Link></li>

              <li className={`sidebar-item  ${ routers.pathname == "/admin/settings" ? "active" : ""} `}><Link href="/admin/settings"><a className="sidebar-link"><i className="fas fa-cogs"></i><span>Settings</span></a></Link></li>

              <li  className="sidebar-item"><a  onClick={logout}  className="sidebar-link button-link"><i className="fas fa-sign-out-alt"></i><span>Logout</span></a></li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
        </div>
    </div>
  </>)
}

export default Sidebar