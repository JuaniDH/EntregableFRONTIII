//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p><strong>Input 1:</strong> {data.input1}</p>
      <p><strong>Input 2:</strong> {data.input2}</p>
    </div>
  );
};

export default Card;