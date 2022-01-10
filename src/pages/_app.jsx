import { createGlobalStyle } from "styled-components";
import PersistentDrawerLeft from "../components/drawer/PersistentDrawerLeft";
import SearchAppBar from "../components/navBar/SearchAppBar";
import { CronologiaProvider } from "../CronologiaContext";
import Footer from "../components/footer/footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    color: white;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }
`;


// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><GlobalStyle />
    <CronologiaProvider>
      <PersistentDrawerLeft />
      <Footer />
    </CronologiaProvider>

  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp