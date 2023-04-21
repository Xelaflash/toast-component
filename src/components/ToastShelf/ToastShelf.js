import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
// import { ToastContext } from '../App';


function ToastShelf({ toastList, handleDismiss }) {
  // const { setIsOpen, variantType, message } = React.useContext(ToastContext);
  console.log(toastList);
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast, index) => (
        <li
          className={styles.toastWrapper}
          key={`${toast.variantType}-${index}`}
        >
          <Toast
            id={toast.id}
            variant={toast.variantType}
            message={toast.message}
            toastList={toastList}
            handleDismiss={handleDismiss}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
