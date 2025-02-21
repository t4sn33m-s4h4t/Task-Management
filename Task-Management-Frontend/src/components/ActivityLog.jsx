 
import { useActivityLog } from "../context/ActivityLogContext";
import { useTheme } from "../context/ThemeContext";

const ActivityLog = () => {
  const { activityLog } = useActivityLog(); 

  const {isDarkMode} = useTheme()
  return (
    <div
      className={`mt-8 p-6 rounded-lg shadow-lg transition duration-300 ${
        isDarkMode ? "bg-purple-950" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3
          className={`mx-auto font-semibold text-lg ${
            isDarkMode ? "text-gray-100" : "text-purple-950"
          }`}
        >
          Activity Log
        </h3>
 
      </div>
      <ol className="list-disc space-y-2">
        {activityLog.map((entry, index) => (
          <li

            key={index}
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {entry}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ActivityLog;