function Rating({ rating = 0 }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(parseFloat(rating));
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push('☆'); 
    }

    return stars;
  };

  return (
    <div>
      <div>
        {renderStars(rating).map((star, index) => (
          <span key={index} style={{ color: star === '★' ? 'gold' : 'gray', fontSize: '24px' }}>
            {star}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Rating;
