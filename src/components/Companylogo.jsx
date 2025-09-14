import React from "react";

export default function Companylogo() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
   "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
   
   "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png",
  ];

  return (
    <div className="bg-gray-100 py-10 mt-5">
      <div className="max-w-6xl mx-auto text-center">
      
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
