import React from "react";


export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastlist] = React.useState([]);

  function createToast(variantType, message) {
    const nextToastList =
      [...toastList, {
        variantType,
        message,
        id: crypto.randomUUID(),
      }];
    setToastlist(nextToastList);
  }

    function dismissToast(id) {
      const nextToastList = () => {
        return toastList.filter((toast) => toast.id !== id);
      };
      setToastlist(nextToastList);
    }

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setToastlist([]);
      }
    }
    // add event listener for escape key keydown
    window.addEventListener('keydown',handleKeyDown);

    // remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toastList,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
