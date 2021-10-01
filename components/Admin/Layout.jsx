import Header from './Header';
import Sidebar from './Sidebar';


export default function Layout({ title, children }) {

  return (<>

      <Head>
        <title>{title ? `${title} - ${process.env.NEXT_PUBLIC_APP_NAME}` :  `${process.env.NEXT_PUBLIC_APP_NAME}` }</title>
      </Head>

     <style global  jsx>{`

          .sidebar-wrapper{
            background: #1E1E2D;
              color: white;
          }

          .sidebar-wrapper .menu .sidebar-link {
            color: #fbfbfb;
          }

          .header{
            background: white!important;
          }

          .sidebar-wrapper .menu .sidebar-link:hover {
            background-color: #3452cc;
          }

          #main {
            margin-left: 245px;
          }

          .sidebar-wrapper {
            width: 245px;
          }

          .sidebar-wrapper .sidebar-header {
            font-size: 2rem;
            font-weight: 700;
            padding: 21px 25px;
          }

          .sidebar-backdrop{
            display: none!important;
          }

    
      `}</style>

             <div id="app">
                <Sidebar />
               <div id="main" className="layout-navbar">
                 <Header/>
                 {children}
              </div>
            </div>
         </>);
}