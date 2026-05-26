import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  const handleLogout = () => {

    localStorage.removeItem("role");

    navigate("/");
  };

  const navLink =
    "hover:text-yellow-300 transition duration-200";

  const activeLink =
    "text-yellow-300 font-semibold";

  return (

    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">

        {/* LOGO */}
        <div
          className="cursor-pointer mb-3 md:mb-0"
          onClick={() => navigate("/")}
        >
          <h1 className="text-2xl font-bold tracking-wide">
            Lecture Scheduler
          </h1>

          <p className="text-sm text-blue-100">
            Admin & Instructor Management
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="flex flex-wrap gap-4 items-center">

          {/* HOME */}
          <Link
            to="/"
            className={`${navLink} ${
              location.pathname === "/" ? activeLink : ""
            }`}
          >
            Home
          </Link>

          {/* ADMIN LINKS */}
          {role === "admin" && (
            <>
              <Link
                to="/courses"
                className={`${navLink} ${
                  location.pathname === "/courses"
                    ? activeLink
                    : ""
                }`}
              >
                Courses
              </Link>

              <Link
                to="/add-course"
                className={`${navLink} ${
                  location.pathname === "/add-course"
                    ? activeLink
                    : ""
                }`}
              >
                Add Course
              </Link>

              <Link
                to="/lectures"
                className={`${navLink} ${
                  location.pathname === "/lectures"
                    ? activeLink
                    : ""
                }`}
              >
                Lectures
              </Link>

              <Link
                to="/add-lecture"
                className={`${navLink} ${
                  location.pathname === "/add-lecture"
                    ? activeLink
                    : ""
                }`}
              >
                Add Lecture
              </Link>

              <Link
                to="/instructors"
                className={`${navLink} ${
                  location.pathname === "/instructors"
                    ? activeLink
                    : ""
                }`}
              >
                Instructors
              </Link>
            </>
          )}

          {/* INSTRUCTOR */}
          {role === "instructor" && (
            <Link
              to="/instructor-panel"
              className={`${navLink} ${
                location.pathname === "/instructor-panel"
                  ? activeLink
                  : ""
              }`}
            >
              My Lectures
            </Link>
          )}

          {/* LOGOUT */}
          {role && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}