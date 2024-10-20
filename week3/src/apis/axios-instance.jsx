import axios from "axios";

const axiosInstance = axios.create({
  params: { language: 'ko-KR' },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  },
  baseURL: import.meta.env.VITE_TMDB_API_URL,
})

export {axiosInstance}