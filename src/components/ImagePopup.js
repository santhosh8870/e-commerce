import React from "react";


// ImagePopup component
export default function ImagePopup({ image, close }) {
  if (!image) return null;

  return (
    <div className="popup-overlay" onClick={close}>
      <div className="popup-content">
        <img src={image} alt="popup" width="320px"/>
      </div>
    </div>
  );
}
