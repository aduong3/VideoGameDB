import GenresList from "./GenresList";
import PlatformList from "./PlatformList";

export default function VideoGame({ game }) {
  const {
    name,
    genres,
    short_screenshots: screenshot,
    metacritic: rating,
    parent_platforms: platform,
  } = game;

  const getGenres = genres.map((item) => item.name);
  const getPlatforms = platform.map((item) =>
    item.platform.name.split(" ")[0].toLowerCase()
  );
  // console.log("genres:", getGenres);
  // console.log(getPlatforms);

  return (
    <li>
      {screenshot?.[0] && (
        <img src={screenshot?.[0]?.image} alt={name} className="game-picture" />
      )}
      {!screenshot?.[0] && <p className="no-image">NO IMAGE</p>}

      <div className="game-info">
        <p className="game-name">{name}</p>
        <PlatformList platforms={getPlatforms} />
        <GenresList genres={getGenres}></GenresList>
      </div>
      <p className="rating">{rating ? rating : "N/A"}</p>
    </li>
  );
}
