import instance from "./axios_Instance";

export const UserLogin = (data: any) => {
  return instance.post("/user/login", data);
};

export const fetchAllUsers = (data: any) => {
  return instance.get(`/user/users?page=${data.page}&search=${data.search}&is_blocked=${data.blocked}`);
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
    const query = data.page ? `?page=${data.page}` : '';
  return instance.get(`/service?page=${query}`)
} 

export const imageUpload = (data: FormData) => {
  return instance.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};


export const createService = (data: any) => {
  return instance.post(`/service`, data)
} 

export const updateService = (data: any) => {
  const { id, ...payload } = data; 
  
  return instance.patch(`/service/${id}`, payload)
} 

export const GetProviderById = (data: any) => {
  return instance.get(`/admin/single?userId=${data.id}`)
} 

export const updateProvider = (data: any) => {
  return instance.patch(`/admin/provider`, data)
} 


export const UpdateUser = (data: any) => {
  return instance.patch('/admin/update-user', data)
}


export const PatientCount = (data: any) => {
  return instance.get('/admin/patient-counts',)
}
