import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const AreYouSure = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the review submission
    console.log('Review submitted:', reviewText);
    console.log('Rating:', rating);
    setReviewText('');
    setRating(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="reviewText">
        <Form.Label>Write your review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={reviewText}
          onChange={handleReviewChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Rating</Form.Label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={star <= rating ? 'star selected' : 'star'}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AreYouSure;
