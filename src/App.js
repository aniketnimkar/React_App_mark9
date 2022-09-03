import React, { useState } from "react";
import "./styles.css";

const musicDb = {
  desi_HipHop: [
    {
      name: "Sidhu moose wala",
      rating: "4.5/5"
    },

    {
      name: "Shubh",
      rating: "5/5"
    },
    {
      name: "Divine",
      rating: "4/5"
    },
    {
      name: "Raftaar",
      rating: "4/5"
    }
  ],
  westCoast_HipHop: [
    {
      name: "Tupac Shakur",
      rating: "5/5"
    },
    {
      name: "Snoop-Dogg",
      rating: "4.5/5"
    },
    {
      name: "Dr. Dre",
      rating: "3.8/5"
    },
    {
      name: "YG",
      rating: "4.2/5"
    }
  ],
  EastCoast_HipHop: [
    {
      name: "Nas",
      rating: "4.8/5"
    },
    {
      name: "Jay-Z",
      rating: "4.5"
    },
    {
      name: "50 Cent",
      rating: "4.2/5"
    },
    {
      name: "J. Cole",
      rating: "3.8/5"
    }
  ],
  Urdu_HipHop: [
    {
      name: "Young Stunners",
      rating: "4.5/5"
    },
    {
      name: "Bohemia",
      rating: "4.8/5"
    },
    {
      name: "Imran Khan",
      rating: "3.8/5"
    },
    {
      name: "Zack Knight.",
      rating: "4.0/5"
    }
  ]
};

export default function App() {
  const [currentGenre, setCurrentGenre] = useState("desi_HipHop");
  function genreClickHandler(genre) {
    setCurrentGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <span>🎤</span> Best HipHop Artist
      </h1>
      <h3>
        Check out my favourite Artists<span>🔥</span>. Select a region to get
        started.
      </h3>
      <div>
        {Object.keys(musicDb).map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {musicDb[currentGenre].map((artist) => (
            <li key={artist.name}>
              <div style={{ fontSize: "large" }}>{artist.name}</div>
              <br />
              <div style={{ fontSize: "medium" }}>{artist.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
