import React from "react";
import { useOutletContext } from "react-router-dom";
import Artist from "./Artist";
import PropTypes from "prop-types";

function ArtistsList() {
  const context = useOutletContext();
  const artists = context ? context.artists : null;

  const artistsComponents = (artists || []).map((artist, index) => (
    <Artist key={artist.id} artist={artist} />
  ));

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {artistsComponents}
    </ul>
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistsList;
