/*
O que é elevação do estado?
É quando movemos o state para um ancestral
na arvore de componentes

Quando que precisamos elevar o estado?
- Um evento em um elemento irmão, afeta o state do seu componente.
- Um evento no elemento pai, afeta o state do seu componente.
- O state precisa persistir, mesmo que seu componente
  seja desmontado (removido da tela).
*/

import React, { useState } from 'react';

const UserCard = ({
  user,
  showDetails,
  onClickViewMore,
  approved,
  onClickApproved
}) => {
  return (
    <div className="UserCard">
      <div className="UserCard__main-info">
        <img
          src={user.picture.thumbnail}
          alt={user.name.first}
        />
        <span>
          {user.name.title} {user.name.first}{' '}
          {user.name.last}{' '}
        </span>

        <button onClick={onClickApproved}>
          {approved ? 'Approvado' : 'Pendente'}
        </button>
        <button onClick={onClickViewMore}>
          {showDetails ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>
      {showDetails && (
        <div className="UserCard__details">
          <span>{user.phone}</span> <br />
          {user.dob.age} anos <br />
          {user.email}
        </div>
      )}
    </div>
  );
};

export default UserCard;
