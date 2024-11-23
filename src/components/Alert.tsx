import { ReactNode } from "react";

interface AlertProps {
  children?: ReactNode;
  onClose?: () => void;
  closeable: boolean;
  alertType:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Alert = ({ children, onClose, closeable, alertType }: AlertProps) => {
  return (
    <div
      className={
        closeable
          ? `alert alert-warning alert-${alertType} fade show`
          : `alert alert-${alertType}`
      }
      role="alert"
    >
      {children}
      {closeable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      )}
    </div>
  );
};

export default Alert;
