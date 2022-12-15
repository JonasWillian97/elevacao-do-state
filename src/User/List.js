import React, { useEffect, useState } from 'react';
import UserCard from './Card';

const UserList = () => {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(null);
  const [approvedByEmail, setApprovedByEmail] = useState(
    {}
  );
  const [showDetailsEmail, setShowDetailsEmail] = useState(
    null
  );

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((r) => r.json())
      .then((json) => {
        setUsers(json.results);
      });
  }, []);

  if (!users) {
    return null;
  }

  const user = users[index];

  return (
    <>
      <button
        disabled={index === 0}
        onClick={() => setIndex(index - 1)}
      >
        Anterior
      </button>
      <button
        disabled={index === users.length - 1}
        onClick={() => setIndex(index + 1)}
      >
        Próximo
      </button>
      <ul className="UserList">
        <li key={user.email}>
          <UserCard
            user={user}
            showDetails={showDetailsEmail === user.email}
            approved={approvedByEmail[user.email]}
            onClickApproved={() =>
              setApprovedByEmail({
                ...approvedByEmail,
                [user.email]: true
              })
            }
            onClickViewMore={() =>
              setShowDetailsEmail(
                user.email === showDetailsEmail
                  ? null
                  : user.email
              )
            }
          />
        </li>
      </ul>
    </>
  );
};

export default UserList;
