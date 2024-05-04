function Stars({ star }) {
  const randomMizer = () => Math.floor(Math.random() * 100);
  return (
    <>
      {Array.from({ length: star }, (_, index) => (
        <div
          style={{
            top: `${randomMizer()}%`,
            left: `${randomMizer()}%`,
            transform: `translate(-50%,-50%)`,
          }}
          className="child-stars"
          key={index}
        >
          {index}
        </div>
      ))}
    </>
  );
}
export default Stars;
