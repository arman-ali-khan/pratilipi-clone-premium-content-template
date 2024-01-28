import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return <>
     <NextTopLoader  color="darkorchid"
  initialPosition={0.08}
  crawlSpeed={100}
  height={3}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={700}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  // template='<div class="bar" role="bar"><div class="peg"></div></div> 
  // <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false} />
  
    <Toaster position="top-center" reverseOrder={false}/><Component {...pageProps} />
  </>;
}
