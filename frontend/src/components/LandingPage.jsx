import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./LandingPage.css";

const LandingPage = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);  // Visible duration

    const finalTimer = setTimeout(() => {
      onFinish();
    }, 4500);  // Fade-out duration (adjust if needed)

    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, [onFinish]);

  const landingContent = (
    <div className={`landing-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="hover-box"> {/* Hover Container */}
        <h2>
          YASHCHOTALA
          <span>YASHCHOTALA</span>
          <span>YASHCHOTALA</span>
          <span>Created By</span>
        </h2>
      </div>
    </div>
  );

  return ReactDOM.createPortal(landingContent, document.getElementById('landing-root'));
};

export default LandingPage;
