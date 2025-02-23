export function Search({ query, setQuery }) {
  return (
    <>
      <input
        className="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}
