import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
// import { ToastContext } from '../App';

function ToastPlayground() {

  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
  const [variantType, setVariantType] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');
  const [toastList, setToastlist] = React.useState([]);

  function handleDismiss(id) {
    const nextToastList = () => {
      return toastList.filter((toast) => toast.id !== id);
    }
    setToastlist(nextToastList);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toastList={toastList} handleDismiss={handleDismiss} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setToastlist([
            ...toastList,
            {
              variantType: variantType,
              message: message,
              id: crypto.randomUUID(),
            },
          ]);
          setMessage('');
          setVariantType(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <div key={option}>
                  <label htmlFor={`variant-${option}`}>
                    <input
                      type="radio"
                      name="variant"
                      id={`variant-${option}`}
                      value={option}
                      checked={option === variantType}
                      onChange={(event) => {
                        setVariantType(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
