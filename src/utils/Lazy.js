import React, { useEffect } from "react";

export default function Lazy() {
  const images = Array.from(document.querySelectorAll("[data-src]"));
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;

            image.src = image.dataset.src;
            image.onload = () => image.previousElementSibling.remove();

            imageObserver.unobserve(image);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  return <div></div>;
}
