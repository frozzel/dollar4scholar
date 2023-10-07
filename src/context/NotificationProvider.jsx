import React, { useState } from "react";

import { NotificationContext } from "./NotificationContext";

// export const NotificationContext = React.createContext();

let timeoutId;
export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");
  // console.log("notification", notification);
  // console.log("classes", classes);
  const updateNotification = (type, value) => {
    // console.log("type", type);
    // console.log("value", value);
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
    <NotificationContext.Provider value={{notification, updateNotification }}>
      {children}
      {notification && (
 <div className="note  left-50 translateX(-50%) top-6 " style={{ position: 'relative', zIndex: 1001 }}>
 {/* <div className="note bounce-custom shadow-md shadow-gray-400 rounded">
   <p className={`${classes} text-white px-4 py-2 font-semibold`}>
     {notification}
   </p>
 </div> */}
</div>


      )}
    </NotificationContext.Provider>
  );
}
