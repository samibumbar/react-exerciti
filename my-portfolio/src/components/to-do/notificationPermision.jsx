// src/components/to-do/notificationPermission.jsx
import { useEffect } from "react";

function NotificationPermission() {
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          alert("Notificările sunt dezactivate. Te rog să le activezi.");
        }
      });
    }
  }, []);

  return null;
}

export default NotificationPermission;
