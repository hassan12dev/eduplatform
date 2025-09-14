import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Pricing({ course, onBack, onEnrollConfirm, purchasedPlanInfo }) {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">
          Please select a course first from{" "}
          <a href="/courses" className="text-blue-600">
            Courses
          </a>
        </p>
      </div>
    );
  }

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", org: "" });

  const plans = [
    {
      id: 1,
      name: "Personal Plan",
      sub: "For you",
      users: "👤 Individual",
      price: "Starting at $11.00 per month",
      note: "Billed monthly or annually. Cancel anytime.",
      button: "Try it free →",
    },
    {
      id: 2,
      name: "Team Plan",
      sub: "For your team",
      users: "👥 2 to 50 people",
      price: "$30.00 a month per user",
      note: "Billed annually. Cancel anytime.",
      button: "Try it free →",
    },
    {
      id: 3,
      name: "Enterprise Plan",
      sub: "For your whole organization",
      users: "🏢 More than 20 people",
      price: "Contact sales for pricing",
      note: "",
      button: "Request a demo →",
    },
  ];

  // Highlight purchased plan if user already bought
  useEffect(() => {
    if (purchasedPlanInfo?.courseId === course.id) {
      const plan = plans.find((p) => p.id === purchasedPlanInfo.planId);
      setSelectedPlan(plan);
    }
  }, [purchasedPlanInfo, course.id]);

  const handleOpenForm = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", org: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Thank you ${formData.name}! Your request for "${course.title}" (${selectedPlan.name}) has been submitted.`
    );

    // Mark course as enrolled in parent component
    onEnrollConfirm(course.id, selectedPlan);

    handleCloseForm();
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            ← Back to Course
          </button>

          {/* Selected Course Info */}
          <div className="flex flex-col items-center mb-10">
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-64 object-cover rounded-xl shadow-md mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-lg border border-gray-200 transition ${
                  purchasedPlanInfo?.courseId === course.id &&
                  purchasedPlanInfo?.planId === plan.id
                    ? "border-green-500 shadow-xl"
                    : "hover:shadow-xl"
                }`}
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                  <p className="text-gray-500">{plan.sub}</p>
                  <p className="text-sm text-gray-600 mt-2">{plan.users}</p>
                  {purchasedPlanInfo?.courseId === course.id &&
                    purchasedPlanInfo?.planId === plan.id && (
                      <p className="text-green-600 font-semibold mt-2">✅ Purchased</p>
                    )}
                </div>

                <div className="p-6">
                  <p className="text-lg font-semibold text-gray-800">{plan.price}</p>
                  {plan.note && <p className="text-sm text-gray-500 mb-4">{plan.note}</p>}

                  <button
                    onClick={() => handleOpenForm(plan)}
                    className="w-full py-3 rounded-lg text-white font-semibold bg-purple-600 hover:bg-purple-700"
                  >
                    {plan.button}
                  </button>

                  <ul className="text-gray-700 text-left mt-6 space-y-2">
                    <li>✅ Access to top courses</li>
                    <li>✅ Certification prep</li>
                    <li>✅ Goal-focused recommendations</li>
                    <li>✅ AI-powered coding exercises</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Form */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
                <button
                  onClick={handleCloseForm}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                  ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">
                  {course.title} - {selectedPlan?.name} Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={formData.org}
                      onChange={(e) =>
                        setFormData({ ...formData, org: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
