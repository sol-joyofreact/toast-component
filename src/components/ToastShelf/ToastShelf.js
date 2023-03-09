import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf({data, handleDismiss}) {
  const toasts = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      { toasts.data.map(({variant, message, id}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id} handleDismiss={toasts.handleDismiss} >{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
