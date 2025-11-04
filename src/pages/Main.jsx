import { useState, useEffect } from "react";
import "./Main.css";

export default function Main() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      setReviews(storedReviews);
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      setReviews([]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) {
      setErrorMessage("Please fill in both your name and review.");
      return;
    }

    setErrorMessage("");
    const newReview = { name, review, id: Date.now() };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setName("");
    setReview("");
  };

  const handleClear = () => {
    setName("");
    setReview("");
    setErrorMessage("");
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to League of Legends Website</h1>

      <div className="download-section">
        <a
          href="https://www.leagueoflegends.com/en-us/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download League of Legends
        </a>
      </div>

      <div className="review-form-card">
        <h3>Leave Your Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value === "" && review === "") {
                setErrorMessage("");
              }
            }}
          />
          <textarea
            className="textarea-field"
            placeholder="Your Review"
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
              if (e.target.value === "" && name === "") {
                setErrorMessage("");
              }
            }}
            rows={3}
          ></textarea>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit Review
            </button>
            <button type="button" onClick={handleClear} className="clear-btn">
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <strong>{r.name}</strong>
              <p>{r.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
