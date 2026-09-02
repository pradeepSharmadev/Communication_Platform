import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const DashboardNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex items-center gap-6 border-b border-border bg-surface px-6 py-4">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-muted hover:text-foreground"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-muted hover:text-foreground"
        }
      >
        Profile
      </NavLink>

      <button
        onClick={handleLogout}
        className="ml-auto text-muted hover:text-error"
      >
        Logout
      </button>
    </nav>
  );
};

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav />

      <main >
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;
