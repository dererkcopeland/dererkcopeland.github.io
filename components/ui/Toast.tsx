'use client';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';

export type ToastProps = {
  title: string;
  description?: string;
  type: 'success' | 'error' | 'info';
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
};

type ToastWithId = { id: number } & ToastProps;

interface ToastContextProps {
    addToast: (toast: ToastProps) => void;
}

const ToastContext = React.createContext<ToastContextProps | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastWithId[]>([]);
  const toastId = useRef(0);

  const addToast = useCallback((toast: ToastProps) => {
    toastId.current += 1;
    setToasts((prevToasts) => [...prevToasts, { id: toastId.current, ...toast }]);
  }, []);

  const removeToast = useCallback((toastId: number) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== toastId)
    );
  }, []);
  
  const contextValue: ToastContextProps = {
    addToast
  }

  return (
    <ToastContext.Provider value={contextValue}>
      <div className="fixed top-4 right-4 z-50 w-full max-w-xs space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastComponent key={toast.id} {...toast} removeToast={removeToast} />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </ToastContext.Provider>
  );
};

const ToastComponent = ({
  id,
  title,
  description,
  type,
  duration = 3000,
  onClose,
  removeToast,
}: ToastWithId & { removeToast: (toastId: number) => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
      removeToast(id);
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration, onClose, id, removeToast]);

  const handleClose = () => {
    setIsVisible(false);
    onClose && onClose();
    removeToast(id);
  };
  const icon =
    type === 'success' ? (
      <CheckCircleIcon className="h-6 w-6 text-green-500" />
    ) : (
      <XCircleIcon className="h-6 w-6 text-red-500" />
    );

  // determine the color depending on the type
  const textColorClass =
    type === 'success'
      ? 'text-green-900'
      : type === 'error'
      ? 'text-red-900'
      : 'text-blue-900';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={cn(
            'pointer-events-auto relative flex max-w-md overflow-hidden rounded-xl border p-4 shadow-lg transition-all duration-700',
            type === 'success'
              ? 'border-green-500 bg-green-50'
              : type === 'error'
              ? 'border-red-500 bg-red-50'
              : 'border-blue-500 bg-blue-50'
          )}
        >
          <div className="absolute left-0 top-0 h-full w-[0.25rem] bg-green-500"></div>
          <div className="mr-3 flex h-8 w-8 items-center justify-center">{icon}</div>
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-row items-center justify-between">
              {/* add textColorClass to the className */}
              <h3 className={cn('text-sm font-medium', textColorClass)}>
                {title}
              </h3>
              <button onClick={handleClose} className="absolute right-2 top-2">
                <XCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {description && (
              // add textColorClass to the className
              <p className={cn('mt-1 text-sm', textColorClass)}>
                {description}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === null) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
