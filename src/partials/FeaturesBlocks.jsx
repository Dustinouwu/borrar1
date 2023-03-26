import React from 'react';
import img2 from '../images/abs.png';
import img3 from '../images/airbag.png';
import img4 from '../images/frenomano.png';
import img5 from '../images/aceite.png';
import img6 from '../images/presionllantas.png';
import img7 from '../images/check.png';
function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Cuando se presente una falla en el tablero de tu vehículo</h2>
            <p className="text-xl text-gray-100">No dudes en visitarnos, te lo solucionaremos.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">

              <img className="mx-auto" src={img2} width="80" height="50" alt="Hero" />
              <h4 className="h4 mb-2">ABS</h4>
              <p className="text-lg text-white text-center">Los frenos son unos de los componentes más importantes de un vehículo y el sistema de frenos debe estar en perfectas condiciones.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">

              <img className="mx-auto" src={img3} width="50" height="50" alt="Hero" />
              <h4 className="h4 mb-2">AIRBAG</h4>
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <p className="text-lg text-white text-center">El uso del Airbag es mucho más frecuente en los autos, cualquier intervención técnica al vehículo se debe tener especial cuidado con este sistema de seguridad.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="mx-auto" src={img4} width="80" height="50" alt="Hero" />
              <h4 className="h4 mb-2">Freno de mano</h4>
              <p className="text-lg text-white text-center">Es un sistema de frenado de emergencia muy imporante en el funcionamiento de tu vehículo.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <img className="mx-auto" src={img5} width="100" height="50" alt="Hero" />
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <img className="mx-auto" src={img6} width="60" height="50" alt="Hero" />
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <img className="mx-auto" src={img7} width="80" height="50" alt="Hero" />
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
