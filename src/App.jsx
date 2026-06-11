// dependencies
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSlices } from "./hooks/useSlices";
import { AuthThunk } from "./app/features/AuthenticationSlice";
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
const Documentation = lazy(() => import("./pages/Documentation"));
const Dashboard = lazy(() => import("./features/Dashboard"));

// main
function App() {
  // auth checkpoint
  const { data, dispatch } = useSlices("authControl");

  // on mount
  useEffect(() => {
    dispatch(AuthThunk());
  }, [dispatch]);

  // loading state
  if (data.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* routes */}
        <Routes>
          <Route
            path="/"
            element={
              data.logged_in ? <Navigate to={"/dashboard"} replace /> : <Home />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route element={<RouteHandler />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
