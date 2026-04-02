const tableStyle = {
  width: "100%",
};

export function Table({ className = "", style, ...props }) {
  const classes = ["data-table", className].filter(Boolean).join(" ");

  return <table className={classes} style={{ ...tableStyle, ...style }} {...props} />;
}

export function TableHeader({ className = "", style, ...props }) {
  return <thead className={className} style={style} {...props} />;
}

export function TableBody({ className = "", style, ...props }) {
  return <tbody className={className} style={style} {...props} />;
}

export function TableRow({ className = "", style, ...props }) {
  return <tr className={className} style={style} {...props} />;
}

export function TableHead({ className = "", style, ...props }) {
  return (
    <th
      className={className}
      style={{
        padding: "0.75rem",
        textAlign: "left",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#f8fafc",
        ...style,
      }}
      {...props}
    />
  );
}

export function TableCell({ className = "", style, colSpan, ...props }) {
  return (
    <td
      colSpan={colSpan}
      className={className}
      style={{
        padding: "0.75rem",
        borderBottom: "1px solid #e5e7eb",
        ...(colSpan ? { textAlign: "center" } : {}),
        ...style,
      }}
      {...props}
    />
  );
}
