import axios, { AxiosInstance } from "axios";

const baseURL = "https://test-task-production-9608.up.railway.app";

interface AxiosService extends AxiosInstance {}

const axiosService: AxiosService = axios.create({ baseURL });

export { axiosService };
