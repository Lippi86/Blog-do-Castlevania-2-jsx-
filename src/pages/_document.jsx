import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>

        <link rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <link rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />   

            <title>Castlevania Blog</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument