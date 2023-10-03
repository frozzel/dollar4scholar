import client from "./client";
import { getToken } from "../utils/helper.js";
import { catchError } from "../utils/helper.js";

export const getProfile = async (userId) => {
    const token = getToken();
    try {
        const { data } = await client("/user/profile/"+ userId,{
            headers: {
                authorization: "Bearer " + token,
            },
        });
        return data;
    } catch (error) {
        return catchError(error);
    }
};
export const updateUser = async (userId, userData) => {
    const token = getToken();
    try {
      const { data } = await client.put(`/user/update/${userId}`, userData, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };