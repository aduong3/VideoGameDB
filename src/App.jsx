import { useState, useEffect } from "react";

import Header from "./components/Header";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
    </>
  );
}

export default App;
