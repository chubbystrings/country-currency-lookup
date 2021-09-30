export const setUserToken = (token: string) => {
    localStorage.setItem('countryLookUpToken', token)
}

export const getUserToken = () => localStorage.getItem('countryLookUpToken')