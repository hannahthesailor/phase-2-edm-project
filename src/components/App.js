import logo from '../logo.svg';
import { Outlet } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function App() {
  const [artists, setArtists] = useState ([])

    useEffect(() => {
      fetch('http://localhost:6001/artists')
      .then(response => response.json())
      .then(artsitsData => setArtists(artsitsData))
  }, [])

  console.log(artists)

  return (
    <div className="App">
      <h1>Discover Your Sound</h1>
      <Outlet />
    </div>
  );
}

export default App;
