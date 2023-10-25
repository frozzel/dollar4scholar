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

// path to get donations
export const getDonations = async () => {
  try {
    const { data } = await client.get(`/scholarship/donations`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

// path to get winner
export const getWinner = async () => {
  try {
    const { data } = await client.get(`/scholarship/winner`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};