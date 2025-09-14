import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pricing from "./Pricing";
import Footer from "../components/Footer";

// Sample Course Data
const courseData = [
  {
    id: 1,
    title: "Website Development",
    price: "$49",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    rating: 4.7,
    duration: "3 Months",
    category: "Web Development",
    description:
      "Learn to build modern, responsive websites using HTML, CSS, JavaScript, and frameworks. Includes practical projects and step-by-step tutorials.",
  },
  {
    id: 2,
    title: "React Mastery",
    price: "$59",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
    rating: 4.8,
    duration: "2 Months",
    category: "Frontend Development",
    description:
      "A deep dive into React.js, covering hooks, context API, and building full-fledged projects. Perfect for frontend developers.",
  },
  {
    id: 3,
    title: "Data Science with Python",
    price: "$79",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
    rating: 4.6,
    duration: "4 Months",
    category: "Data Science",
    description:
      "Master Python for data analysis, visualization, and machine learning. Includes real datasets and hands-on projects.",
  },
  {
    id: 4,
    title: "Machine Learning A–Z",
    price: "$89",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    rating: 4.9,
    duration: "5 Months",
    category: "Artificial Intelligence",
    description:
      "Comprehensive course on machine learning algorithms, model building, and deployment. Includes real-world ML projects.",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    price: "$39",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    rating: 4.5,
    duration: "2 Months",
    category: "Design",
    description:
      "Learn user interface and user experience design principles with Figma and Adobe XD. Includes hands-on design projects.",
  },
  {
    id: 6,
    title: "Mobile App Development",
    price: "$69",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    rating: 4.7,
    duration: "3 Months",
    category: "Mobile Development",
    description:
      "Build cross-platform mobile apps using React Native and Flutter. Covers app UI, API integration, and deployment.",
  },
  {
    id: 7,
    title: "Digital Marketing",
    price: "$45",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    rating: 4.4,
    duration: "1.5 Months",
    category: "Marketing",
    description:
      "Covers SEO, Google Ads, Social Media Marketing, and Email Marketing strategies with practical campaigns.",
  },
  {
    id: 8,
    title: "Cybersecurity Basics",
    price: "$55",
    image: "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg",
    rating: 4.6,
    duration: "2.5 Months",
    category: "Cybersecurity",
    description:
      "Learn ethical hacking, penetration testing, and security fundamentals. Hands-on labs included.",
  },
  {
    id: 9,
    title: "Cloud Computing with AWS",
    price: "$95",
    image: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg",
    rating: 4.8,
    duration: "4 Months",
    category: "Cloud Computing",
    description:
      "Master AWS services (EC2, S3, Lambda, RDS) and cloud architecture. Includes hands-on labs and real deployment projects.",
  },
];

// ---------------------- Course List Component ----------------------
function CourseList({ courses, onSelect, search, setSearch, filter, setFilter }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 border rounded-lg"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/4 p-3 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => onSelect(course)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-t-xl h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{course.title}</h2>
                <p className="text-gray-600 text-sm">{course.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-blue-600 font-semibold">{course.price}</span>
                  <span className="text-yellow-500">⭐ {course.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------- Course Detail Component ----------------------
function CourseDetail({ course, onBack, onEnroll, isEnrolled, hasPurchasedPlan, handleEnrollConfirm }) {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <button
        onClick={onBack}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        ← Back to Courses
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-yellow-500 text-lg mr-2">⭐</span>
            <span className="font-semibold">{course.rating}/5</span>
            <span className="text-gray-500 text-sm ml-2">(1200+ ratings)</span>
          </div>
        </div>

        <p className="text-gray-600 mt-2">{course.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg shadow-md"
          />

          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>📅 Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>📚 Category:</strong> {course.category}
            </p>
            <p>
              <strong>💳 Price:</strong> {course.price}
            </p>
            <p>
              <strong>🌍 Language:</strong> English
            </p>
            <p>
              <strong>🎓 Difficulty:</strong> Beginner
            </p>

            {/* Enroll Button with Plan Logic */}
            <button
              onClick={() => {
                if (!isEnrolled) {
                  if (hasPurchasedPlan) {
                    handleEnrollConfirm(course.id); // direct enroll
                  } else {
                    onEnroll(); // open Pricing page for first plan
                  }
                }
              }}
              disabled={isEnrolled}
              className={`w-full py-2 rounded-lg shadow ${
                isEnrolled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              {isEnrolled ? "✅ Enrolled" : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------- Main Component ----------------------
export default function Course() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPricing, setShowPricing] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [hasPurchasedPlan, setHasPurchasedPlan] = useState(false); // ✅ New state
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCourses = courseData.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || c.category === filter)
  );

  const handleEnrollConfirm = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      setHasPurchasedPlan(true); // mark plan purchased
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showPricing ? (
        <Pricing
          course={selectedCourse}
          onBack={() => setShowPricing(false)}
          onEnrollConfirm={handleEnrollConfirm}
        />
      ) : !selectedCourse ? (
        <CourseList
          courses={filteredCourses}
          onSelect={setSelectedCourse}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
      ) : (
        <CourseDetail
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
          onEnroll={() => setShowPricing(true)}
          isEnrolled={enrolledCourses.includes(selectedCourse.id)}
          hasPurchasedPlan={hasPurchasedPlan}
          handleEnrollConfirm={handleEnrollConfirm}
        />
      )}
      <Footer />
    </div>
  );
}
