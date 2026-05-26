import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function AddCourse() {

  const [form, setForm] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/courses", form);

      toast.success("Course added successfully");

      setForm({
        name: "",
        level: "",
        description: "",
        image: "",
      });

    } catch (err) {

      console.log(err);

      toast.error("Failed to add course ❌");
    }
  };

  return (

    <div className="max-w-3xl mx-auto">

      <div className="bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Add New Course
        </h1>

        <p className="text-gray-500 mb-8">
          Create a new course with level and details
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Course Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter course name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          {/* LEVEL */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Level
            </label>

            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">
                Select Level
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>

            </select>

          </div>

          {/* DESCRIPTION */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Enter course description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Image URL / Name
            </label>

            <input
              type="text"
              name="image"
              placeholder="example: java.png"
              value={form.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Add Course
          </button>

        </form>

      </div>

    </div>
  );
}