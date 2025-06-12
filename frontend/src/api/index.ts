import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const destinationsApi = {
  getAll: () => api.get('/destinations'),
  getById: (id: string) => api.get(`/destinations/${id}`),
  getByState: (state: string) => api.get(`/destinations/state/${state}`),
  getHiddenGems: () => api.get('/destinations/discover/hidden-gems'),
  create: (data: any) => api.post('/destinations', data),
  update: (id: string, data: any) => api.put(`/destinations/${id}`, data),
  delete: (id: string) => api.delete(`/destinations/${id}`),
  addRating: (id: string, data: any) => api.post(`/destinations/${id}/ratings`, data),
};

export const tourPackagesApi = {
  getAll: () => api.get('/tour-packages'),
  getById: (id: string) => api.get(`/tour-packages/${id}`),
  getVerified: () => api.get('/tour-packages/filter/verified'),
  getByPriceRange: (min: number, max: number) => 
    api.get(`/tour-packages/filter/price?min=${min}&max=${max}`),
  create: (data: any) => api.post('/tour-packages', data),
  update: (id: string, data: any) => api.put(`/tour-packages/${id}`, data),
  delete: (id: string) => api.delete(`/tour-packages/${id}`),
  addReview: (id: string, data: any) => api.post(`/tour-packages/${id}/reviews`, data),
};

export const authApi = {
  register: (data: any) => api.post('/users/register', data),
  login: (data: any) => api.post('/users/login', data),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
};

export default api;
