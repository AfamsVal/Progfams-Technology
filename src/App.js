import { Routes, Route } from "react-router-dom";
import UserRoute from "../src/component/user-route/UserRoute";
import Course from "./pages/course/Course";
import Digital from "./pages/digital/Digital";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Service from "./pages/service/Service";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Details from "./pages/course-details/Details";
import Pricing from "./pages/pricing/Pricing";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserRoute>
            <Home />
          </UserRoute>
        }
      />
      <Route
        path="/course"
        element={
          <UserRoute>
            <Course />
          </UserRoute>
        }
      />
      <Route
        path="/pricing"
        element={
          <UserRoute>
            <Pricing />

          </UserRoute>
        }
      />
      <Route
        path="/service"
        element={
          <UserRoute>
            <Service />

          </UserRoute>
        }
      />
      <Route
        path="/faq"
        element={
          <UserRoute>
            <Faq />
          </UserRoute>
        }
      />
      
      <Route
        path="/digital"
        element={
          <UserRoute>
            <Digital />
          </UserRoute>
        }
      />
      
      <Route
        path="/login"
        element={
          <UserRoute>
            <Login />
          </UserRoute>
        }
      />
      <Route
        path="/register"
        element={
          <UserRoute>
            <Register />
          </UserRoute>
        }
      />
      <Route
        path="/course-details"
        element={
          <UserRoute>
            <Details />
          </UserRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <UserRoute>
            <ForgotPassword />
          </UserRoute>
        }
      />
    </Routes>
  );
}

export default Router;
