import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useQueryFetch = (category, page) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', category, page],
    queryFn: async () => {
      const response = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${page}`);
      return response;
    },
  });

  return { data, isLoading, isError };
}

export default useQueryFetch;