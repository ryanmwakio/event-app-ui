import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "./../components/layout/layout";
import { toast } from "react-toastify";

toast.configure();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
