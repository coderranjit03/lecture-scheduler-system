import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function Courses() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  // FETCH COURSES
  const fetchCourses = () => {

    API.get("/courses")
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // DELETE COURSE
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/courses/${id}`);

      // REMOVE FROM UI
      setCourses((prev) =>
        prev.filter((course) => course.id !== id)
      );

      toast.success("Course deleted successfully ✅");

    } catch (err) {

      console.log(err);

      toast.error("Delete failed ❌");
    }
  };

  if (loading) {
    return <div className="p-6">Loading courses...</div>;
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {courses.map((course) => (

          <div
            key={course.id}
            className="p-4 border rounded shadow bg-white"
          >

            <h2 className="text-lg font-semibold">
              {course.name}
            </h2>

            <p className="text-gray-600">
              {course.level}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              {course.description}
            </p>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(course.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}