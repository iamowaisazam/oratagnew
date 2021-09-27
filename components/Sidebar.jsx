import React from 'react'
import {toast} from 'react-toastify';
import Link from 'next/link';

const Sidebar = () => {

//   const submit = (e) => {
//     e.preventDefault();
//     e.target.email.value = "";
//     toast.success("Successfully Subscribed");
//  }

return (
      <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo"><Link href="/"><a><img src="/assets/images/logo/logo.png"  /></a></Link></div>
            <div className="toggler">
              <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-item "><Link href="/"><a className="sidebar-link" ><i className="fas fa-plus"></i><span>Assign Oratag</span></a>
              </Link></li>

            <li className="sidebar-item"><Link href="/search"><a className="sidebar-link"><i className="fas fa-search-plus"></i><span>Search OraTag</span></a></Link></li>

            <li className="sidebar-item"><Link href="/settings"><a className="sidebar-link"><i className="fas fa-cogs"></i><span>Settings</span></a></Link></li>

            <li className="sidebar-item"><Link href="/logout"><a  className="sidebar-link"><i className="fas fa-sign-out-alt"></i><span>Logout</span></a></Link></li>
          </ul>
        </div>
        <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
      </div>
    </div>
    )
}

export default Sidebar