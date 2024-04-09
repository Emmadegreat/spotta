import { Route, BrowserRouter as Router, Routes, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Navigation2 from "./components/navigation2";
import React from "react";
import Register from "./pages/register";
import Review1 from "./pages/review1";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/review1', element: <Review1 /> },
  { path: '/navigation2', element: <Navigation2 /> },
  {path: '/register', element: <Register /> },
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
