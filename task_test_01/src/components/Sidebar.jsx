import { NavLink } from "react-router-dom";
import { useState } from "react";
import defaultLogo from "../assets/logo/Logo1.jpg";

export function Sidebar({ logoSrc = defaultLogo, logoAlt = "Logo" }) {
  const [collapsed, setCollapsed] = useState(false);
  const resolvedLogoSrc = logoSrc.startsWith("/") ? logoSrc : `/${logoSrc}`;

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

      <button
        type="button"
        className="sidebar__toggle"
        onClick={() => setCollapsed((value) => !value)}
      >
        {collapsed ? "||" : "☰"}
      </button>

      <nav className="sidebar__nav" aria-label="Primary">
        {!collapsed && <div className="sidebar__section-label"></div>}
        <div className="sidebar__list">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              ["sidebar__item", isActive ? "sidebar__item--active" : ""].filter(Boolean).join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ["sidebar__item", isActive ? "sidebar__item--active" : ""].filter(Boolean).join(" ")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              ["sidebar__item", isActive ? "sidebar__item--active" : ""].filter(Boolean).join(" ")
            }
          >
            Users
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}
