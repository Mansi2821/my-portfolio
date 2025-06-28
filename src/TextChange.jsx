import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I am Mansi 👋", "Hi, I am Mansi 👋", "Hi, I am Mansi 👋"];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = texts[textIndex];
    const updatedText = isDeleting
      ? currentString.substring(0, charIndex - 1)
      : currentString.substring(0, charIndex + 1);

    setCurrentText(updatedText);

    if (!isDeleting && updatedText === currentString) {
      setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) =>
        isDeleting ? prev - 1 : prev + 1
      );
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="transition-all duration-300 text-[#E9F1FA]">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextChange;
