import React from "react";

function Discover() {
  return (
    <div>
      <h3>
        One of the best things about EDM is the artists are BUSY! They love
        creating music, perform shows constantly and always strive to have
        something new to share with their fans. But even with all that being
        said everyone gets in a music rut sometimes. Whether you're just
        getting starting or simply feeling burnt out on your current playlist,
        we got you! Just hit play and enjoy a selection of current and classic
        EDM songs. Try to give each song a chance; you never know which one is
        going to have a killer drop that gives you goosebumps after the build
        up!
      </h3>
      <h3>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/1Fp51jGDTWAOWzcxEG0GMQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </h3>
    </div>
  );
}

export default Discover;
