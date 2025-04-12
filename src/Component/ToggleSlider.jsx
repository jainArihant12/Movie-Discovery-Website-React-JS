import React, { useEffect, useState } from "react";

const ToggleSlider = () => {
  // ✅ Read the saved theme from localStorage, default to light
  const [isOn, setIsOn] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    console.log("Applying theme:", isOn ? "dark" : "light");

    if (isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isOn]);

  return (
    <div
      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-blue-500" : "bg-gray-400"
      }`}
      onClick={() => {
        setIsOn((prev) => !prev); // ✅ Properly toggles the state
      }}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSlider;
