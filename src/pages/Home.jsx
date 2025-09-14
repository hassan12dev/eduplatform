import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Feedback from "./Feedback";
import Companylogo from "../components/Companylogo";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// ---------------------- Sample Popular Courses (3) ----------------------
const popularCourses = [
  {
    id: 1,
    title: "React Mastery",
    price: "$59",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
    rating: 4.8,
    category: "Frontend Development",
  },
  {
    id: 2,
    title: "Data Science with Python",
    price: "$79",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
    rating: 4.6,
    category: "Data Science",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    price: "$39",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    rating: 4.5,
    category: "Design",
  },
];

export default function Homepage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert("🎉 Successfully Enrolled in course!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
   
      <Navbar />
      <Hero />
      <Companylogo />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Popular Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {popularCourses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-t-xl h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.category}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-blue-600 font-semibold">
                      {course.price}
                    </span>
                    <span className="text-yellow-500">⭐ {course.rating}</span>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={() => handleEnroll(course.id)}
                    disabled={isEnrolled}
                    className={`mt-5 w-full py-2 rounded-lg shadow ${
                      isEnrolled
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {isEnrolled ? "✅ Enrolled" : "Enroll Now"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
     <Feedback />
      <Footer />
    </div>
  );
}
