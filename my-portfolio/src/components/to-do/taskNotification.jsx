// taskNotification.jsx
import React, { useEffect } from "react";

function TaskNotification({ task, dueDate }) {
  useEffect(() => {
    // Verificăm dacă există o dată validă pentru task
    if (!dueDate) return;

    // Calculează momentul notificării cu 10 minute înainte de termenul limită
    const notificationTime = new Date(dueDate).getTime() - 10 * 60 * 1000; // 10 minute înainte de dueDate
    const now = new Date().getTime();

    // Dacă timpul de notificare este în viitor
    if (notificationTime > now) {
      const timeoutId = setTimeout(() => {
        if (Notification.permission === "granted") {
          new Notification("Task Reminder", {
            body: `Task-ul "${task}" este aproape de termenul limită!`,
          });
        }
      }, notificationTime - now);

      // Curățăm timeout-ul la demontarea componentei
      return () => clearTimeout(timeoutId);
    }
  }, [task, dueDate]);

  return null;
}

export default TaskNotification;
