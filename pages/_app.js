import '../styles/globals.css'
import Navbar from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Navbar/>
    </>
  )
}

export default MyApp
