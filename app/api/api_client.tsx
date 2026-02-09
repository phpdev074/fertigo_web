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

export const GetProviders = (data: any) => {
  return instance.get(`/admin/providers?page=${data.page}`);
};

export const BookingHistory = (data: any) => {
  return instance.get(`/admin/booking-history?page=${data.page}&service=${data.serviceId}&status=${data.status}&time=${data.dateRange}`)
}

export const BookignCounts = () => {
  return instance.get('/admin/booking-counts')
}

export const Service = (data: any) => {
  return instance.get(`/service?page=${data.page}`)
} 