import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAccessToken = () => {
  return localStorage.getItem('couple_ring_access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

export const tokenReissue = async () => {
  const refresh_token = getRefreshToken();
  await axios.put(`${BASE_URL}/auth/refresh`,
    {
      refreshToken: refresh_token
    }
  ).then((res) => {
    localStorage.setItem('couple_ring_access_token', res.data.accessToken);
    localStorage.setItem('refresh_token', res.data.refreshToken);
  });
};