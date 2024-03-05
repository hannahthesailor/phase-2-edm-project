import logo from '../logo.svg';
import { Outlet } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import '../App.css';
import ArtistsList from './ArtistsList';
import NavBar from './NavBar';

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/artists')
      .then(response => response.json())
      .then(artistsData => setArtists(artistsData))
  }, []);

  function addArtist(newArtist){

  fetch('http://localhost:6001/artists', {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newArtist)
  })
  .then(response => response.json())
  .then(newArtsitData => setArtists(artsits => [...artists, newArtsitData]))
}

  console.log(artists);

  return (
    <div className="App" style={{ backgroundImage: 'url("/gradient-trendy-background_23-2150429385.jpg")',
    backgroundAttachment: 'fixed' }}>
      <NavBar/>
      <h1>Welcome to EDM</h1>
      <ArtistsList artists={artists} />
      <Outlet context={{ artists: artists, addArtist : addArtist }} />
    </div>
  );
}


export default App;
