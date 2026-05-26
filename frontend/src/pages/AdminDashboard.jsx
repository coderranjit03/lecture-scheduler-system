import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {

  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const courseRes = await API.get("/courses");

      const lectureRes = await API.get("/lectures");

      const instructorRes = await API.get("/instructors");

      setCourses(courseRes.data);

      setLectures(lectureRes.data);

      setInstructors(instructorRes.data);

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div>

      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Dashboard Overview
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* COURSES */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500 text-lg">
            Total Courses
          </p>

          <h2 className="text-5xl font-bold mt-4 text-blue-600">
            {courses.length}
          </h2>

        </div>

        {/* LECTURES */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500 text-lg">
            Total Lectures
          </p>

          <h2 className="text-5xl font-bold mt-4 text-green-600">
            {lectures.length}
          </h2>

        </div>

        {/* INSTRUCTORS */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500 text-lg">
            Total Instructors
          </p>

          <h2 className="text-5xl font-bold mt-4 text-purple-600">
            {instructors.length}
          </h2>

        </div>

      </div>

      {/* RECENT LECTURES */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Recent Lectures
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">
                  Topic
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
                  Course
                </th>

                <th className="p-4 text-left">
                  Instructor
                </th>

              </tr>

            </thead>

            <tbody>

              {lectures.slice(0, 5).map((lecture) => (

                <tr
                  key={lecture.id}
                  className="border-t"
                >

                  <td className="p-4">
                    {lecture.topic}
                  </td>

                  <td className="p-4">
                    {lecture.lectureDate}
                  </td>

                  <td className="p-4">
                    {lecture.course?.name}
                  </td>

                  <td className="p-4">
                    {lecture.instructor?.name}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}