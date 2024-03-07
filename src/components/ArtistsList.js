import React from "react";
import { useOutletContext } from "react-router-dom";
import Artist from "./Artist";
import PropTypes from "prop-types";
import "../ArtistsList.css"; // Import the external CSS file

function ArtistsList() {
  const context = useOutletContext();
  const artists = context ? context.artists : null;

  const artistsComponents = (artists || []).map((artist, index) => (
    <Artist key={artist.id} artist={artist} />
  ));

  return (
    <div>
      <ul className="artist-list">
        {artistsComponents}
      </ul>
    </div>
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistsList;
