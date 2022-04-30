export const createUser = (form) => {
  const id = Date.now();

  const newUser = {
    id: id,
    email: form.email,
    password: form.password
  };

  return newUser;
};