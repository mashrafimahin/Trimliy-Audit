// dependencies
import { Suspense } from "react";
import { Routes, Route } from "react-router";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// main
function App() {
  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
