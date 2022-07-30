import '../styles/globals.css'
import React, { useState, useEffect } from 'react' 

//Downgrade react 18 to 17 para evitar erro de Hydration
function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      
             <Component {...pageProps} />
          
    );
  }
}

export default MyApp;