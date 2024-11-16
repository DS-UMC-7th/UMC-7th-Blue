import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useQueryFetch = (url) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await axiosInstance.get(url);
      return response;
    }
  });

  return { data, isLoading, isError };
}

export default useQueryFetch;