export function Button({ className = "", style, type = "button", variant = "default", ...props }) {
  const classes = ["ui-button", `ui-button--${variant}`, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      style={style}
      {...props}
    />
  );
}
