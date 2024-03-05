function Artist({ artist }){
    return((
        <li>
             <img src={artist.image}
             style={{ width: '300px', height: '200px' }}
             />
           <h4>{artist.name}</h4>
           {artist.spotify && <p> <a href={artist.spotify} target="_blank" rel="noopener noreferrer">Open Artist in Spotify</a></p>}
           <p>Genre: {artist.genre}</p>
          <p>Upcoming Shows: {artist.about || 'No information available.'}</p>
           
    </li>
    ))
}

export default Artist;