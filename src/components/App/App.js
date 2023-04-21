import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

// export const ToastContext = React.createContext();

function App() {


  // const value = {
  //   VARIANT_OPTIONS,
  //   variantType,
  //   setVariantType,
  //   message,
  //   setMessage,
  //   isOpen,
  //   setIsOpen,
  // }


  return (
    // <ToastContext.Provider value={value}>
    <>
      <ToastPlayground />
      <Footer />
    </>
    // </ToastContext.Provider>
  );
}

export default App;
