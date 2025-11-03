import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) return;

    const newReview = { name, review, id: Date.now() };
    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setName("");
    setReview("");
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">
        Welcome to League of Legends Website
      </h1>

      {/* Official Download Button */}
      <div className="text-center mb-5">
        <a
          href="https://www.leagueoflegends.com/en-us/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger btn-lg"
        >
          Download League of Legends
        </a>
      </div>

      {/* Review Form */}
      <div className="card shadow-sm p-4 mb-5">
        <h3 className="mb-3">Leave Your Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Your Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>

      {/* Display Reviews */}
      <div>
        <h3 className="mb-3">Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="card mb-2 p-3 shadow-sm">
              <strong>{r.name}</strong>
              <p>{r.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
