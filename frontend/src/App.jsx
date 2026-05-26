import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";

import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse";

import Lectures from "./pages/Lectures";
import AddLecture from "./pages/AddLecture";

import Instructors from "./pages/Instructors";

import InstructorPanel from "./pages/InstructorPanel";

import LoginPage from "./pages/LoginPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* LOGIN PAGE */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* ADMIN PANEL */}
        <Route
          path="/admin"
          element={<AdminLayout />}
        >

          {/* DASHBOARD */}
          <Route
            index
            element={<AdminDashboard />}
          />

          {/* COURSES */}
          <Route
            path="courses"
            element={<Courses />}
          />

          {/* ADD COURSE */}
          <Route
            path="add-course"
            element={<AddCourse />}
          />

          {/* LECTURES */}
          <Route
            path="lectures"
            element={<Lectures />}
          />

          {/* ADD LECTURE */}
          <Route
            path="add-lecture"
            element={<AddLecture />}
          />

          {/* INSTRUCTORS */}
          <Route
            path="instructors"
            element={<Instructors />}
          />

        </Route>

        {/* INSTRUCTOR PANEL */}
        <Route
          path="/instructor-panel"
          element={<InstructorPanel />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;