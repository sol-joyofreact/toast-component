import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, children, id, handleDismiss}) {
  const className=`${styles.toast} ${styles[variant]}`;
  const IconTag = ICONS_BY_VARIANT[variant];

  return (
    <div className={className}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden> error - </VisuallyHidden>
      {children}
      </p>
      <button 
        className={styles.closeButton} 
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => { handleDismiss(id) }}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
