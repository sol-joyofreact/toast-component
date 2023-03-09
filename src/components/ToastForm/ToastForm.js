import React from "react";
import Button from '../Button';
import styles from './ToastForm.module.css';
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
function ToastForm() {
  const [ message, setMessage ] = React.useState("");
  const [ toastType, setToastType ] = React.useState('notice');
  const { addMessage } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    addMessage(toastType, message);
    setMessage("");
    setToastType('notice');
  }
  return (

    <form onSubmit={handleSubmit}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }} >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message}
            onChange={(event) => { setMessage(event.target.value) }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`} >
            {VARIANT_OPTIONS.map((variant)=> (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={ toastType === variant}
                  onChange={event => {
                    setToastType(event.target.value)
                  }}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`} >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ToastForm;
