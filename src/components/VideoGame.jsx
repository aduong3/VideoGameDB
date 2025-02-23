export default function VideoGame({ game }) {
  const {
    name,
    genres,
    short_screenshots: screenshot,
    metacritic: rating,
  } = game;

  const getGenres = genres.map((item) => item.name);
  // console.log("genres:", genresList);

  return (
    <li>
      {screenshot?.[0] && (
        <img src={screenshot?.[0]?.image} alt={name} className="game-picture" />
      )}

      <div className="game-info">
        <p className="game-name">{name}</p>
        <GenresList genres={getGenres}></GenresList>
      </div>
      <p className="rating">{rating ? rating : "N/A"}</p>
    </li>
  );
}

function GenresList({ genres }) {
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
