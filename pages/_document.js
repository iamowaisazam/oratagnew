import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
        return (
              <Html>
                <Head>

                <meta name="keywords" content="Owais Azam Technical, Responsive Web Design Develop, Html,Css,Wordpress, Tutorial,Bootstrap,Softwares Programing, Php, Seo, Laravel,React js" />
                <meta name="author" content="Hi Its Me Owais Azam I am Professionally Full Stack Designer and Developer From Karachi, Pakistan. I am Specialize In Design And Develop Web and Native Applications." />
                <meta http-equiv="content-type" content="text/html;charset=utf-8" />
                <meta charset="UTF-8" />
        

                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.gstatic.com/" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.css" />

                    <link rel="stylesheet" href="/assets/vendors/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="/assets/vendors/bootstrap-icons/bootstrap-icons.css" />
                    <link rel="stylesheet" href="/assets/css/app.css" />
                    <link rel="shortcut icon" href="/assets/images/favicon.html" type="image/x-icon" />
                    <link rel="stylesheet" href="/css/plugins/nprogress.css" />

                </Head>
                <body>

                  <Main />
                  <script src="/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                  <script src="/assets/js/bootstrap.bundle.min.js"></script>
                  <script src="/assets/js/main.js"></script>      
                  <NextScript />
                </body>
              </Html>
              );
         }
}

export default MyDocument;