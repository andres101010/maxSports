import axios from "axios";
export const sendLogin = async (dataUser) => {
    const response = await axios.post('http://localhost:3003/login', dataUser);
    return response.data;
  }
  export const register = async (dataUser) => {
    const response = await axios.post('http://localhost:3003/login/registro', dataUser);
    return response.data;
  }
  export const pqr = async (datapqr) => {
    const response = await axios.post('http://localhost:3003/pqr/nuevoPQR', datapqr);
    return response.data;
  }