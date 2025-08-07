import axiosInstance from "./interceptor";

export const getPosts = () => {
  return axiosInstance.get(`/posts?search=${""}`);
};
