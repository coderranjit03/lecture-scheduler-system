import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function Instructors() {

  const [instructors, setInstructors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {

    fetchInstructors();

  }, []);

  const fetchInstructors = () => {

    API.get("/instructors")
      .then((res) => setInstructors(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/instructors", form);

      toast.success("Instructor added successfully ✅");

      setForm({
        name: "",
        email: "",
      });

      fetchInstructors();

    } catch (err) {

      console.log(err);

      toast.error("Failed to add instructor ❌");
    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this instructor?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/instructors/${id}`);

      setInstructors((prev) =>
        prev.filter((i) => i.id !== id)
      );

      toast.success("Instructor deleted ✅");

    } catch (err) {

      console.log(err);

      toast.error("Delete failed ❌");
    }
  };

  return (

    <div className="space-y-10">

      {/* FORM */}
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Add Instructor
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Instructor Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Instructor Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-3 font-semibold"
          >
            Add Instructor
          </button>

        </form>

      </div>

      {/* LIST */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          All Instructors
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {instructors.map((ins) => (

            <div
              key={ins.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xl font-bold text-gray-800">
                    {ins.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {ins.email}
                  </p>

                </div>

                <button
                  onClick={() => handleDelete(ins.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}