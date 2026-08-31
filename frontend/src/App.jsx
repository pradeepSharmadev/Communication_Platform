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

const Home = lazy(() => import("./pages/Landing/Home"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const DashboardLayout = lazy(() => import("./pages/service/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/service/Dashboard"));
const Profile = lazy(() => import("./pages/service/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/404" element={<PageNotFound />} />

            {/* secure route */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
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
