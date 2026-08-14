import React, { useEffect, useState } from "react";
import "../Assets/CSS/Slider.css";

export default function Slider() {
  const images = [
    "https://www.gonoise.com/cdn/shop/files/TOP_BANNER_D_HP_2_new_result.webp?v=1782986427",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[index]} alt="Banner" />
    </div>
  );
}