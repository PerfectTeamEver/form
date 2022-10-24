import React from "react";
import "../spinner.css";

export default function LoadingSpinner({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="spinner-section">
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
