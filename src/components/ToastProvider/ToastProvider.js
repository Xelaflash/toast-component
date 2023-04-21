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
