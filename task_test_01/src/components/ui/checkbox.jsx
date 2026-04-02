import { forwardRef } from "react";

export const Checkbox = forwardRef(function Checkbox(
  { className = "", style, onCheckedChange, onChange, ...props },
  ref,
) {
  const classes = ["ui-checkbox", className].filter(Boolean).join(" ");

  return (
    <input
      ref={ref}
      type="checkbox"
      className={classes}
      style={style}
      onChange={(event) => {
        onChange?.(event);
        onCheckedChange?.(event.target.checked);
      }}
      {...props}
    />
  );
});

Checkbox.displayName = "Checkbox";
