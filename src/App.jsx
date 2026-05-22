// dependencies
import { Suspense } from "react";
import { Routes, Route } from "react-router";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";

// main
function App() {
  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
