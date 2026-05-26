import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function AddLecture() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const [form, setForm] = useState({
    topic: "",
    lectureDate: "",
    courseId: "",
    instructorId: "",
  });

  // Load data
  useEffect(() => {
    API.get("/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log("Courses error:", err));

    API.get("/instructors")
      .then((res) => setInstructors(res.data))
      .catch((err) => console.log("Instructors error:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      topic: form.topic,
      lectureDate: form.lectureDate,
      courseId: Number(form.courseId),
      instructorId: Number(form.instructorId),
    };
console.log("FORM DATA:", form);
console.log("PAYLOAD:", payload);

    API.post("/lectures", payload)
      .then(() => {
          toast.success("Lecture scheduled successfully ✅");

        setForm({
          topic: "",
          lectureDate: "",
          courseId: "",
          instructorId: "",
        });
      })
      .catch((err) => {

        console.log(err);

        const message =
          err.response?.data?.message ||
          "Lecture scheduling failed";

        toast.error(message);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Lecture</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        {/* Topic */}
        <input
          name="topic"
          placeholder="Topic"
          value={form.topic}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        {/* Date */}
        <input
          type="date"
          name="lectureDate"
          value={form.lectureDate}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        {/* Course Dropdown */}
        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
          <option value="">Select Course</option>

          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} (ID: {c.id})
            </option>
          ))}
        </select>

        {/* Instructor Dropdown */}
        <select
          name="instructorId"
          value={form.instructorId}
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
          <option value="">Select Instructor</option>

          {instructors.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name} (ID: {i.id})
            </option>
          ))}
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Schedule Lecture
        </button>
      </form>
    </div>
  );
}