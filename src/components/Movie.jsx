import "./Movie.css";

export default function Movie({ movie }) {
  const { image, title, authorName } = movie;
  return (
    <div className="movie">
      <img src={image} alt={`${title}의 포스터 이미지`} />
      <h3>{title}</h3>
      <p>{authorName}</p>
    </div>
  );
}
