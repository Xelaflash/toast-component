import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import {ToastContext} from '../ToastProvider';

function ToastPlayground() {
  const { createToast, dismissAllToast } = React.useContext(ToastContext);

  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
  const [variantType, setVariantType] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');


  React.useEffect(() => {
    function handleDismissAll(event) {
        if (event.key === 'Escape') {
          dismissAllToast();
        }
    }
    // add event listener for escape key keydown
    window.addEventListener('keydown', (event) => {
      handleDismissAll(event);
    });

    // remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', (event) => {
        handleDismissAll(event);
      });
    };
  }, [dismissAllToast]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createToast(variantType, message);
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
