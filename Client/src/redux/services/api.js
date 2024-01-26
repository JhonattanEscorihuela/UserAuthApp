import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://jhonattanescorihuela-userauthapp.onrender.com',
  headers: {
    'Authorization': `Bearer ${Cookies.get('authToken')}`,
  },
});


// Manejo de errores global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes hacer el manejo global de errores
    console.error('Error en la solicitud archivo /services/api:', error);

    // Puedes propagar el error para que se maneje en el lugar donde se hizo la solicitud
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    // Actualizar el token antes de cada solicitud
    const newToken = Cookies.get('authToken');
    if (newToken) {
      config.headers['Authorization'] = `Bearer ${newToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default api;
