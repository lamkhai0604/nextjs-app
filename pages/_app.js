import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Next App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
