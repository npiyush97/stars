function Stars({ star }) {
  const randomMizer = () => Math.floor(Math.random() * 100);

  function renderStars() {
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(
        <div
          style={{
            top: `${randomMizer()}%`,
            left: `${randomMizer()}%`,
            transform: `translate(-50%,-50%)`,
          }}
          className="child-stars"
          key={i}
        >
          {i}
        </div>
      );
    }
    return stars;
  }

  return <>{renderStars()}</>;
}
export default Stars;
