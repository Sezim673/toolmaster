import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'info';
}

interface NotificationContextType {
  showNotification: (message: string, type?: 'success' | 'info') => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback((message: string, type: 'success' | 'info' = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="notifications-container">
        {notifications.map(n => (
          <div key={n.id} className={`notification notification-${n.type}`}>
            <span>{n.type === 'success' ? '✓' : 'ℹ'}</span>
            <span>{n.message}</span>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider');
  return ctx;
}
