import axiosInstance from "./interceptor";

export const Register = (data) => {
  return axiosInstance.post(`/user/register`, data);
};
