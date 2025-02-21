import { createContext, useState, useContext } from "react";

const ActivityLogContext = createContext();

export const ActivityLogProvider = ({ children }) => {
  const [activityLog, setActivityLog] = useState([]);

  const logActivity = (message) => {
    const timestamp = new Date().toLocaleString();
    setActivityLog((prevLog) => { 
      if (prevLog.length >= 10) {
        const newLog = [...prevLog.slice(1), `${message} (${timestamp})`];
        return newLog;
      } else {
        return [...prevLog, `${message} (${timestamp})`];
      }
    });
  };

  return (
    <ActivityLogContext.Provider value={{ activityLog, logActivity }}>
      {children}
    </ActivityLogContext.Provider>
  );
};

export const useActivityLog = () => {
  return useContext(ActivityLogContext);
};