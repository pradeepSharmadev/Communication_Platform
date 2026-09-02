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
import { AuthProvider } from "./pages/auth/AuthContext";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/landing/Home"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const DashboardLayout = lazy(() => import("./pages/features/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/features/Dashboard"));
const ConversationDashboard = lazy(
  () => import("./pages/features/ConversationDashboard"),
);
const VideoCallPage = lazy(() => import("./pages/features/VideoCallPage"));
const AudioCallPage = lazy(() => import("./pages/features/AudioCallPage"));
const ArchitectureViewPage = lazy(
  () => import("./pages/features/ArchitectureViewPage"),
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
              <Route path="/dashboard" element={<ConversationDashboard />} />
              <Route
                path="/dashboard/:userId"
                element={<ConversationDashboard />}
              />
              <Route
                path="/dashboard/:userId/video-call"
                element={<VideoCallPage />}
              />
              <Route
                path="/dashboard/:userId/audio-call"
                element={<AudioCallPage />}
              />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/architecture" element={<ArchitectureViewPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
