import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Learn New Skills Online with Top Instructors
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                  Join thousands of learners and improve your career opportunities
                  with our expertly designed courses.
                </p>
                <div className="mt-6 flex gap-4">
                  {/* Get Started → Login page */}
                  <a
                    href="/login"
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
                  >
                    Get Started
                  </a>
                  {/* Explore Courses → Courses page */}
                  <a
                    href="/courses"
                    className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700"
                  >
                    Explore Courses
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg"
                  alt="Learning"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </section>
  );
}
