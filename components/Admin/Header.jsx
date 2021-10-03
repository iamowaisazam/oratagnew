import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  const {auth} = props;

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
  
    return (<>

    <style jsx>{`

    `}</style>

   <header className="header mb-1">
       <nav className="navbar navbar-expand navbar-light ">
          <div className="container-fluid">
            <a onClick={ToggleSidebar} className="button-link burger-btn d-block"><i className="bi bi-justify fs-3" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
                  <div className="dropdown">
                  <a>
                    <div className="user-menu d-flex">
                      <div className="user-name text-end me-3">
                        <h6 className="mb-0 text-gray-600">{auth.name}</h6>
                        <p className="mb-0 text-sm text-gray-600">User</p>
                      </div>
                      <div className="user-img d-flex align-items-center">
                        <div className="avatar avatar-md">
                          <img src="/assets/images/faces/1.jpg" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" href="#"> <i className="icon-mid bi bi-person me-2" /> My Profile</a>
                      </li>
                      <li> <hr className="dropdown-divider" /> </li>
                      <li><a className="dropdown-item" href="#"><i className="icon-mid bi bi-box-arrow-left me-2" /> Logout</a></li>
                  </ul>
              </div>
            </div>
          </div>
      </nav>
    </header>
      </>)
}

export default Header