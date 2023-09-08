import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:5000";

interface AxiosService extends AxiosInstance {}

const axiosService: AxiosService = axios.create({ baseURL });

export { axiosService };
