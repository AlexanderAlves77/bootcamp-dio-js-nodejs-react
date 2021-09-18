const user = {
  name: 'Alexander',
  lastName: 'Alves',
};

function getFullName(user) {
  return {
    ...user,
    fullname: `${user.name} ${user.lastName}`,
  };
}

const userFullName = getFullName(user);
console.log(userFullName);
