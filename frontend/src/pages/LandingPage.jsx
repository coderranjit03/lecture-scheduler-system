import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function LandingPage() {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  // FETCH COURSES
  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      const res = await API.get("/courses");

      setCourses(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // ADMIN LOGIN
  const handleAdminLogin = () => {

    navigate("/login");
  };

  // INSTRUCTOR PANEL
  const goToInstructorPanel = () => {

    localStorage.setItem("role", "instructor");

    navigate("/instructor-panel");
  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div>
            <h1 className="text-2xl font-bold">
              Lecture Scheduler
            </h1>

            <p className="text-sm text-blue-100">
              Admin Lecture Management System
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex gap-4">

            {/* INSTRUCTOR PANEL */}
            <button
              onClick={goToInstructorPanel}
              className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold transition"
            >
              Instructor Panel
            </button>

            {/* ADMIN LOGIN */}
            <button
              onClick={handleAdminLogin}
              className="bg-white text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg font-semibold transition"
            >
              Admin Login
            </button>

          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            Lecture Scheduling System
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Manage courses, instructors, lectures, and schedules
            efficiently while preventing lecture clashes.
          </p>

        </div>
      </div>

      {/* COURSES */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Available Courses
        </h2>

        {courses.length === 0 ? (

          <div className="text-center text-gray-500">
            No courses available
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course) => (

              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <img
                  src={
                    course.image ||
                    "https://via.placeholder.com/400x250"
                  }
                  alt={course.name}
                  className="w-full h-52 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex justify-between items-center mb-3">

                    <h3 className="text-2xl font-bold text-gray-800">
                      {course.name}
                    </h3>

                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                      {course.level}
                    </span>

                  </div>

                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>

                  <div className="text-sm text-gray-500">
                    Total Lectures:
                    {" "}
                    {course.lectures?.length || 0}
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}