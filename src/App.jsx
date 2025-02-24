import { useState, useEffect } from "react";

import Header from "./components/Header";
import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { useFetch } from "./components/useFetch";
import Main from "./components/Main";
import VideoGamesList from "./components/VideoGamesList";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [defaultGames, setDefaultGames] = useState([]);

  const { isLoading, error, games } = useFetch(query);

  useEffect(function () {
    async function fetchDefaultGames() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&metacritic=90,100&platforms=1`
        );
        if (!response.ok) {
          throw new Error("cannot fetch data");
        }
        const data = await response.json();
        console.log(data);
        setDefaultGames(data.results);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchDefaultGames();
  }, []);

  return (
    <>
      <div className="app">
        <Header>
          <Logo />
          <Search setQuery={setQuery} query={query} />
        </Header>
        <Main>
          {!query && <VideoGamesList games={defaultGames} />}
          {query && <VideoGamesList games={games} />}
        </Main>
      </div>
    </>
  );
}

export default App;
