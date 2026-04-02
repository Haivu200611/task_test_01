import { createContext, useContext } from "react";

const DialogContext = createContext(null);

export function Dialog({ open, onOpenChange, children }) {
  if (!open) {
    return null;
  }

  return (
    <DialogContext.Provider value={{ onOpenChange }}>
      <div className="ui-dialog-overlay" onClick={() => onOpenChange?.(false)}>
        {children}
      </div>
    </DialogContext.Provider>
  );
}

export function DialogContent({ className = "", style, children, ...props }) {
  const dialog = useContext(DialogContext);
  const classes = ["ui-dialog", className].filter(Boolean).join(" ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={classes}
      style={style}
      onClick={(event) => event.stopPropagation()}
      {...props}
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={() => dialog?.onOpenChange?.(false)}
        className="ui-dialog__close"
      >
        ×
      </button>
      {children}
    </div>
  );
}

export function DialogHeader({ className = "", style, ...props }) {
  const classes = ["ui-dialog__header", className].filter(Boolean).join(" ");

  return <div className={classes} style={style} {...props} />;
}

export function DialogTitle({ className = "", style, ...props }) {
  const classes = ["ui-dialog__title", className].filter(Boolean).join(" ");

  return <h2 className={classes} style={style} {...props} />;
}
