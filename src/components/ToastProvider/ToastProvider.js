import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();


function ToastProvider({children}) {
  const [ notifications, setNotifications ] = React.useState([]);
  useEscapeKey(() => setNotifications([]));

  const addMessage = React.useCallback((variant, message) => {
    const id = crypto.randomUUID();
    const newNotification = {
      variant,
      message,
      id 
    }
    const newNotifications = [...notifications, newNotification];
    setNotifications(newNotifications);
  }, [notifications]);

  const deleteMessage = React.useCallback((id) => {
    const newNotifications = notifications.filter((item) => {
      return item.id !== id;
    })
    setNotifications(newNotifications)
  }, [notifications]);


  return (
    <ToastContext.Provider value={{
      data: notifications,
      handleDismiss: deleteMessage,
      addMessage: addMessage,
    }}>{children}</ToastContext.Provider>
  )
}

export default ToastProvider;
