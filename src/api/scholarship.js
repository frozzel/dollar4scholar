import client from "./client";
import { getToken } from "../utils/helper.jsx";
import { catchError } from "../utils/helper.jsx";

// path to donate to pot
export const donateToPot = async (userId, userData) => {

    const token = getToken();
    try {
      const { data } = await client.post(`/scholarship/donate/${userId}`, userData, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };

// path to get current pot
export const getCurrentPot = async () => {
  try {
    const { data } = await client.get(`/scholarship/pot`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

// path to buy ticket
export const buyTicket = async (userId, userData) => {
  const token = getToken();
  try {
    const { data } = await client.post(`/scholarship/enter/${userId}`, userData, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
