"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import styles from "./styles/Toast.module.css";
import SuccessIcon from "@/icons/SuccessIcon";
import InfoTrangle from "@/icons/InfoTrangle";
import PendingIcon from "@/icons/PendingIcon";

type ToastType = "success" | "error" | "warning" | "info";

type ToastItem = {
  id: string;
  type: ToastType;
  message: string;
  description?: string;
  duration: number;
};

type ToastOptions = {
  type?: ToastType;
  description?: string;
  duration?: number;
};

type ToastContextValue = {
  showToast: (message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const toastAccent: Record<ToastType, string> = {
  success: "#91b33c",
  error: "#ff3b30",
  warning: "#f59e0b",
  info: "#708b2e",
};

const toastIcon: Record<ToastType, React.ReactNode> = {
  success: <SuccessIcon />,
  error: <InfoTrangle />,
  warning: <InfoTrangle />,
  info: <PendingIcon />,
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    const timer = timers.current[id];
    if (timer) {
      clearTimeout(timer);
      delete timers.current[id];
    }
  }, []);

  const showToast = useCallback(
    (message: string, options?: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const toast: ToastItem = {
        id,
        type: options?.type ?? "info",
        message,
        description: options?.description,
        duration: options?.duration ?? 4000,
      };

      setToasts((prev) => [toast, ...prev]);

      timers.current[id] = setTimeout(() => {
        removeToast(id);
      }, toast.duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className={styles.container}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${styles[toast.type]}`}
            style={{
              // @ts-expect-error CSS variables
              "--toast-duration": `${toast.duration}ms`,
              // @ts-expect-error CSS variables
              "--toast-accent": toastAccent[toast.type],
            }}
            onClick={() => removeToast(toast.id)}
          >
            <span className={styles.icon}>{toastIcon[toast.type]}</span>
            <div className={styles.content}>
              <p className={styles.message}>{toast.message}</p>
              {toast.description && (
                <p className={styles.description}>{toast.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
