const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  /* Было:
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);*/
  
  /* Стало: */
  const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    return Promise.resolve(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);