// dependencies
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
// auth handler
import { useAuth } from "./hooks/useAuth";
// route handler
import RouteHandler from "./utils/RouteHandler";
// loader
import Loader from "./components/Loader";
// pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Dashboard = lazy(() => import("./features/Dashboard"));

// main
function App() {
  // auth checkpoint
  const auth = useAuth();

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* routes */}
        <Routes>
          <Route
            path="/"
            element={auth ? <Navigate to={"/dashboard"} replace /> : <Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route element={<RouteHandler />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
