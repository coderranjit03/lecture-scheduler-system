import { useEffect, useState } from "react";
import API from "../services/api";

export default function InstructorPanel() {

  const [instructors, setInstructors] = useState([]);

  const [selectedInstructor, setSelectedInstructor] = useState("");

  const [lectures, setLectures] = useState([]);

  const [loading, setLoading] = useState(false);

  // LOAD INSTRUCTORS
  useEffect(() => {

    API.get("/instructors")
      .then((res) => setInstructors(res.data))
      .catch((err) => console.log(err));

  }, []);

  // FETCH LECTURES
  const handleInstructorChange = async (e) => {

    const instructorId = e.target.value;

    setSelectedInstructor(instructorId);

    if (!instructorId) {

      setLectures([]);

      return;
    }

    try {

      setLoading(true);

      const res = await API.get(
        `/lectures/instructor/${instructorId}`
      );

      setLectures(res.data);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);
    }
  };

  const selectedInstructorData =
    instructors.find(
      (i) => i.id === Number(selectedInstructor)
    );

  return (

    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h1 className="text-4xl font-bold">
              Instructor Panel
            </h1>

            <p className="text-green-100 mt-2">
              View assigned lectures, course names, and lecture dates
            </p>

          </div>

          <a
            href="/"
            className="bg-white text-green-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-200 transition w-fit"
          >
            Back to Home
          </a>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* SELECT BOX */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Select Instructor
          </h2>

          <select
            value={selectedInstructor}
            onChange={handleInstructorChange}
            className="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          >

            <option value="">
              Choose Instructor
            </option>

            {instructors.map((i) => (

              <option
                key={i.id}
                value={i.id}
              >
                {i.name} (ID: {i.id})
              </option>

            ))}

          </select>

        </div>

        {/* STATS */}
        {selectedInstructor && (

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {/* CARD */}
            <div className="bg-white rounded-2xl shadow-lg p-6">

              <p className="text-gray-500">
                Instructor
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {selectedInstructorData?.name}
              </h3>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl shadow-lg p-6">

              <p className="text-gray-500">
                Total Lectures
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {lectures.length}
              </h3>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl shadow-lg p-6">

              <p className="text-gray-500">
                Instructor ID
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {selectedInstructor}
              </h3>

            </div>

          </div>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold text-gray-800">
              Assigned Lectures
            </h2>

          </div>

          {loading ? (

            <div className="p-10 text-center text-gray-500">
              Loading lectures...
            </div>

          ) : lectures.length > 0 ? (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="p-4 text-left">
                      Lecture ID
                    </th>

                    <th className="p-4 text-left">
                      Topic
                    </th>

                    <th className="p-4 text-left">
                      Date
                    </th>

                    <th className="p-4 text-left">
                      Course Name
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {lectures.map((lecture) => (

                    <tr
                      key={lecture.id}
                      className="border-t hover:bg-gray-50 transition"
                    >

                      <td className="p-4">
                        #{lecture.id}
                      </td>

                      <td className="p-4 font-medium">
                        {lecture.topic}
                      </td>

                      <td className="p-4">
                        {lecture.lectureDate}
                      </td>

                      <td className="p-4">
                        {lecture.course?.name || "N/A"}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="p-12 text-center">

              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Lectures Assigned
              </h3>

              <p className="text-gray-500">
                Selected instructor currently has no scheduled lectures.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}