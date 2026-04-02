import { forwardRef } from "react";

export const Input = forwardRef(function Input({ className = "", style, type = "text", ...props }, ref) {
  const classes = ["ui-input", className].filter(Boolean).join(" ");

  return <input ref={ref} type={type} className={classes} style={style} {...props} />;
});

Input.displayName = "Input";
