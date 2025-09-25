import { api, requestConfig } from "../utils/config";

// get user details
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(`${api}/users/profile`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
    return { error: "Erro ao buscar perfil" };
  }
};

// update user details
const updateProfile = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(`${api}/users/profile`, config);
    return await res.json();
  } catch (error) {
    return { error: "Erro ao atualizar perfil" };
  }
};

// get user details
const getUserDetails = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(`${api}/users/${id}`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  updateProfile,
  getUserDetails,
};

export default userService;
