import React from "react";

const testimonials = [
  {
    id: 1,
    name: "William D Davids",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "SkillMine is an incredible learning platform! The courses are high quality and easy to follow.",
    rating: 4,
  },
  {
    id: 2,
    name: "Steve Davids",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "SkillMine makes online learning simple and effective. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Davids",
    role: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "Great platform with amazing instructors and practical content!",
    rating: 5,
  },
  {
    id: 4,
    name: "John Davids",
    role: "Data Engineer",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    feedback:
      "SkillMine courses boosted my career. Easy-to-understand material!",
    rating: 4,
  },
];

function Feedback() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Instructor</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition"
          >
            {/* User Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover"
            />
            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{t.feedback}</p>
              {/* Rating */}
              <div className="flex mt-3">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-lg ${
                        i < t.rating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
