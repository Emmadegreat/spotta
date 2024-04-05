import { Route, BrowserRouter as Router, Routes, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import React from "react";

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
])

export default router

/*const Home = React.lazy(() => import("./pages/home"));
const ProjectRoutes = () => {
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/mathematics" element={<Subjects />} />
                <Route path="/singlesubject" element={<SingleSubject />} />
                <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </React.Suspense>
    );
  };
  export default ProjectRoutes;*/
