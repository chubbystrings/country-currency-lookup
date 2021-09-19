export const checkIsLoggedIn = () => {
  const token = localStorage.getItem("countryLookUpToken");

  return token ? true : false;

};
