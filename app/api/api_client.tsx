import instance from "./axios_Instance";

export const UserLogin = (data: any) => {
  return instance.post("/user/login", data);
};

export const fetchAllUsers = (data: any) => {
  return instance.get(`/user/users?page=${data.page}`);
};

export const userCounts = () => {
  return instance.get('/admin/user-counts');
};