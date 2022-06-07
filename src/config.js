const API_URL_MOCK = process.env.REACT_APP_MOCK_SERVER
const API_URL_PROD = "https://dashboard.heroku.com"

export const getHostedServer = (path) => {
  if(!path) {
    return API_URL_PROD
  }
  return API_URL_PROD + path
}

export const getMockServer = (path) => {
  if(!path) {
    return API_URL_MOCK
  }

  return API_URL_MOCK + path
}
