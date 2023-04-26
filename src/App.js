import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* <h1>netflix-clone</h1> */}
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={request.fetchHorrerMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
