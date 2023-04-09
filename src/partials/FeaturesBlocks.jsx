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
              <h4 className="h4 mb-2">FRENO DE MANO</h4>
              <p className="text-lg text-white text-center">Es un sistema de frenado de emergencia muy imporante en el funcionamiento de tu vehículo.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <img className="mx-auto" src={img5} width="100" height="50" alt="Hero" />
              <h4 className="h4 mb-2">NIVEL DE ACEITE</h4>
              <p className="text-lg text-white text-center">Indica el nivel del aceite del auto.
                Puede ser de color amarillo indicando un nivel bajo de aceite y en color rojo indica que el depósito de aceite está vacio.
                Es necesario que mantengas los niveles de aceite recomendados para que el motor esté correctamente lubricado..</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img className="mx-auto" src={img6} width="60" height="50" alt="Hero" />
              <h4 className="h4 mb-2">PRESIÓN EN NEUMÁTICOS</h4>
              <p className="text-lg text-white text-center">Advierte sobre una mala presión en los neumáticos
                Es un sistema de reciente incorporación pero requiere de programar los niveles de presión de los neumáticos cada ocasión.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <img className="mx-auto" src={img7} width="80" height="50" alt="Hero" />
              <h4 className="h4 mb-2">FALLA EN EL MOTOR</h4>
              <p className="text-lg text-white text-center">El famoso testigo check engine indica alguna falla en el motor pero esto no indica que el auto quedó inservible. Lo más recomendable es llevarlo al taller mecánico más cercano
                Este testigo puede ser de color amarillo o rojo, esté último puede indicar una falla más grave. Debido a la complejidad del motor.</p>
            </div>

          </div>



        </div>
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
          <h3 className="h4 text-center mb-4">¿Todavía no conoces todos nuestros servicios? <br/>Tenemos promociones especiales para ti <br/>
            Entonces llámenos para saber cómo podemos serle de ayuda</h3>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
