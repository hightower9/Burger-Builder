import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-397e0.firebaseio.com/'
});

export default instance;