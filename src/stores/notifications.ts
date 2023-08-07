import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref<any[]>([]);

  function addNotification(notification) {
    notifications.value.push(notification);
  };

  function closeNotification(notification) {
    notifications.value = notifications.value.filter(n => n !== notification);
  };
  return { notifications, addNotification, closeNotification };
});
