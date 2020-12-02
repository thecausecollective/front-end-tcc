import '../styles/globals.css';
import Navigation from '../components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';



// all page props get sent to this its like app.js in react.
// endpoint for updating the pages.
// The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
function MyApp({ Component, pageProps }) {

  return(
    <>
 
      <Navigation/>
      <Component {...pageProps} />
    
  
  </>
  )
 
}

export default MyApp
