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
                    <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
                    <meta charSet="UTF-8" />
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
                    <link rel="stylesheet" href="/assets/vendors/bootstrap-icons/bootstrap-icons.css" />
                    <link rel="shortcut icon" href="/assets/images/favicon.html" type="image/x-icon" />
                </Head>
                <body>

                  <Main />
                  <script src="/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                  <script src="/assets/js/bootstrap.bundle.min.js"></script>
                  <NextScript />
                </body>
              </Html>
              );
         }
}

export default MyDocument;