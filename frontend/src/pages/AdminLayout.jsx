import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AdminLayout() {

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {

    localStorage.removeItem("role");

    navigate("/");
  };

  const menu = [
        {
          name: "Dashboard",
          path: "/admin"
        },
        {
          name: "Courses",
          path: "/admin/courses"
        },
        {
          name: "Add Course",
          path: "/admin/add-course"
        },
        {
          name: "Lectures",
          path: "/admin/lectures"
        },
        {
          name: "Add Lecture",
          path: "/admin/add-lecture"
        },
        {
          name: "Instructors",
          path: "/admin/instructors"
        }
  ];

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <div className="w-72 bg-gradient-to-b from-blue-800 to-indigo-900 text-white shadow-2xl">

        {/* LOGO */}
        <div className="p-6 border-b border-blue-700">

          <h1 className="text-3xl font-bold">
            Admin Panel
          </h1>

          <p className="text-blue-200 mt-1">
            Lecture Scheduler
          </p>

        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">

          {menu.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg transition duration-200 ${
                location.pathname === item.path ||
                (item.path === "/admin" &&
                 location.pathname === "/admin")
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* LOGOUT */}
        <div className="absolute bottom-0 w-72 p-4 border-t border-blue-700">

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold transition"
          >
            Logout
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* TOPBAR */}
        <div className="bg-white shadow-md px-8 py-5 flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Lecture Scheduling System
            </h2>

            <p className="text-gray-500">
              Admin Management Dashboard
            </p>

          </div>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">

          <Outlet />

        </div>

      </div>

    </div>
  );
}