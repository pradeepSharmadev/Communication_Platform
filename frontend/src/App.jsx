import {
  createContext,
  useContext,
  useEffect,
  useState,
  Suspense,
  lazy,
} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";
import { AuthProvider } from "./pages/auth/authContext";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Landing/Home"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const DashboardLayout = lazy(() => import("./pages/features/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/features/Dashboard"));
const ConversationDashboard = lazy(
  () => import("./pages/features/ConversationDashboard"),
);
const Profile = lazy(() => import("./pages/features/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/404" element={<PageNotFound />} />

            {/* secure route */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<ConversationDashboard />} />
                <Route path="/dashboard/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
