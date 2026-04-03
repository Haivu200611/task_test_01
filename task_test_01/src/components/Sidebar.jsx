import { useState } from "react";
import defaultLogo from "../assets/logo/Logo1.jpg";
import { Button } from "./ui/button";

export function Sidebar({ logoSrc = defaultLogo, logoAlt = "Logo", currentPage = "home", onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);
  const resolvedLogoSrc = logoSrc.startsWith("/") ? logoSrc : `/${logoSrc}`;

  const itemClassName = (page) =>
    ["sidebar__item", currentPage === page ? "sidebar__item--active" : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <aside
      className="sidebar"
      data-collapsed={collapsed}
      style={{ "--sidebar-width": collapsed ? "96px" : "290px" }}
    >
      <div className="sidebar__brand">
        <div className="sidebar__brand-mark">
          <img src={resolvedLogoSrc} alt={logoAlt} className="sidebar__brand-image" />
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="sidebar__toggle"
        onClick={() => setCollapsed((value) => !value)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "||" : "|||"}
      </Button>

      <nav className="sidebar__nav" aria-label="Primary">
        {!collapsed && <div className="sidebar__section-label" />}
        <div className="sidebar__list">
          <Button
            type="button"
            variant="outline"
            className={itemClassName("home")}
            onClick={() => onNavigate?.("home")}
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            Home
          </Button>
          <Button
            type="button"
            variant="outline"
            className={itemClassName("about")}
            onClick={() => onNavigate?.("about")}
            aria-current={currentPage === "about" ? "page" : undefined}
          >
            About
          </Button>
          <Button
            type="button"
            variant="outline"
            className={itemClassName("users")}
            onClick={() => onNavigate?.("users")}
            aria-current={currentPage === "users" ? "page" : undefined}
          >
            Users
          </Button>
        </div>
      </nav>
    </aside>
  );
}
