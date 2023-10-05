import React, { createContext, useState } from "react";

export const NotificationContext = React.createContext();

let timeoutId;
export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");
  console.log("notification", notification);
  console.log("classes", classes);
  const updateNotification = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);

    switch (type) {
      case "error":
        setClasses("bg-danger");
        break;
      case "success":
        setClasses("bg-success");
        break;
      case "warning":
        setClasses("bg-warning");
        break;
      default:
        setClasses("bg-danger");
    }
    setNotification(value);

    timeoutId = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}
      {notification && (
        <div className="note " style={{position: 'fixed', zIndex:999}}>
          <div className="bounce-custom shadow-md shadow-gray-400 rounded">
            <p className={classes + " text-white px-4 py-2 font-semibold"}>
              {notification}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
