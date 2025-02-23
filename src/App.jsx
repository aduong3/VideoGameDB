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

  const { isLoading, error, games } = useFetch(query);

  return (
    <>
      <div className="app">
        <Header>
          <Logo />
          <Search setQuery={setQuery} query={query} />
        </Header>
        <Main>
          <VideoGamesList games={games} />
        </Main>
      </div>
    </>
  );
}

export default App;
