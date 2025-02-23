import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export function useFetch(query) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchAPI() {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`,
            { signal: controller.signal }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          console.log(data.results);
          setGames(data.results);
        } catch (err) {
          console.log(err.message);
        }
      }
      if (query.length < 4) {
        setGames([]);
        setError("");
        return;
      }

      fetchAPI();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { isLoading, error, games };
}
