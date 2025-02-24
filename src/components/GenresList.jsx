export default function GenresList({ genres }) {
  return (
    <>
      <div className="genre-list">
        {genres.map((item) => (
          <p className="genre" key={item}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
}
