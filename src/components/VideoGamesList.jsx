import VideoGame from "./VideoGame";

export default function VideoGamesList({ games }) {
  return (
    <>
      <ul className="games-list">
        {games.map((game) => (
          <VideoGame game={game} key={game.name} />
        ))}
      </ul>
    </>
  );
}
