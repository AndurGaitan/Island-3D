import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hola, Bienvenido a 
        <span className='font-semibold mx-2 text-white'> Island 🏝️</span>
        👋
        <br />
        En ella encontraras una atrapante historia redactada para los que esten interesados..
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Ríos de agua cristalina recorren la isla, fluyendo con un murmullo que recuerda a la fuente de la vida eterna. Sus corrientes purifican y renuevan, reflejando un cielo sin sombras. Aquí, el agua no solo sacia la sed del cuerpo, sino también la del espíritu, ofreciendo paz a los corazones que buscan. <br />  
        </p>

        <Link to='/#' className='neo-brutalism-white neo-btn'>
        💧🌊
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        En la isla flotante, las criaturas conviven en un silencio sagrado, donde el león reposa junto al cordero. Sus movimientos suaves y pacientes evocan recuerdos de un edén perdido, un lugar de pureza y armonía, protegido por la gracia de un amor eterno.
        </p>

        <Link to='/#' className='neo-brutalism-white neo-btn'>
        🦁🕊️
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Los árboles de la isla ofrecen frutos dorados que emanan una luz cálida, como estrellas al alcance de la mano. Son manjares celestiales, llenos de misterio y bendiciones. Cada bocado es una caricia para el alma, un eco de una promesa divina que nutre el espíritu y el cuerpo.
      </p>

      <Link to='/#' className='neo-brutalism-white neo-btn'>
      🍏🍇 
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;