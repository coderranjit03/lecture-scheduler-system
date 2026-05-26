import { useEffect, useState } from "react";
import API from "../services/api";

export default function Lectures() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures();
  }, []);

  // FETCH ALL LECTURES
  const fetchLectures = () => {
    API.get("/lectures")
      .then((res) => setLectures(res.data))
      .catch((err) => console.log(err));
  };

  // DELETE LECTURE
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lecture?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/lectures/${id}`);

      // remove instantly from UI
      setLectures((prev) =>
        prev.filter((lecture) => lecture.id !== id)
      );

      toast.success("Lecture deleted successfully ✅");

    } catch (err) {

      console.log(err);

      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Lectures
      </h1>

      <table className="w-full border border-gray-300">

        <thead>
          <tr className="bg-gray-200">

            <th className="border p-2">ID</th>

            <th className="border p-2">Topic</th>

            <th className="border p-2">Date</th>

            <th className="border p-2">Course</th>

            <th className="border p-2">Instructor</th>

            <th className="border p-2">Actions</th>

          </tr>
        </thead>

        <tbody>
          {lectures.map((l) => (
            <tr key={l.id} className="text-center">

              <td className="border p-2">
                {l.id}
              </td>

              <td className="border p-2">
                {l.topic}
              </td>

              <td className="border p-2">
                {l.lectureDate}
              </td>

              {/* COURSE */}
              <td className="border p-2">
                {l.course?.name || l.courseId}
              </td>

              {/* INSTRUCTOR */}
              <td className="border p-2">
                {l.instructor?.name || l.instructorId}
              </td>

              {/* ACTIONS */}
              <td className="border p-2">

                <button
                  onClick={() => handleDelete(l.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}