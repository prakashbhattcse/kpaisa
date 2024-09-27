export const saveSession = (user) => {
  localStorage.setItem("session", JSON.stringify(user));
};

export const getSession = () => {
  return JSON.parse(localStorage.getItem("session"));
};
