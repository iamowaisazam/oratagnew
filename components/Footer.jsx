import React from 'react'
import {toast} from 'react-toastify';
import Link from 'next/link';

const Footer = () => {

//   const submit = (e) => {
//     e.preventDefault();
//     e.target.email.value = "";
//     toast.success("Successfully Subscribed");
//  }

return (
        <footer>
        <div className="footer clearfix mb-0 text-muted">
          <div className="float-start">
            <p>2021 ©OraTag.com</p>
          </div>
          <div className="float-end">
          
          </div>
        </div>
      </footer>
    )
}

export default Footer