import React from 'react';

function GoogleMaps() {
  return (
    <div>
      <h2 className="h2 mb-10 text-center">Encuentranos en:</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5%',
        }}
      >

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.72631644425974!2d-78.48923907615242!3d-0.1132129513631874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58577187e1a05%3A0xb0a6ca06d65383b1!2sTaller%20Electromec%C3%A1nico%20Mundi%20Auto&#39;s!5e0!3m2!1ses-419!2sec!4v1686594526870!5m2!1ses-419!2sec"
          width="600"
          height="450"
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default GoogleMaps;
