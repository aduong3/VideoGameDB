export default function VideoGame({ game }) {
  const { name, genres, short_screenshots: screenshot } = game;

  return (
    <li>
      {screenshot?.[0] && (
        <img src={screenshot?.[0]?.image} alt={name} className="game-picture" />
      )}
      <p className="game-name">{name}</p>
    </li>
  );
}
