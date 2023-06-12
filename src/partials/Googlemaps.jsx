import React from 'react';

function GoogleMaps() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.9725556044456!2d-78.48894714501535!3d-0.11338427630256091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58577187e1a05%3A0xb0a6ca06d65383b1!2sLavadora%20Mundi%20Auto&#39;s!5e0!3m2!1ses!2sec!4v1686584891543!5m2!1ses!2sec"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
