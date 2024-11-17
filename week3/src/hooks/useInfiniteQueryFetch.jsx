import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useInfiniteQueryFetch = (url) => {
  const {
    data,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [url],
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(`${url}?language=ko-KR&page=${pageParam}`);
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // const lastMovie = lastPage.results[lastPage.length - 1];
      const lastMovie = lastPage.data.results.at(-1);
      // console.log("lastMovie: ", lastMovie);

      return lastMovie ? allPages?.length + 1 : undefined;

    }
  })

  return {
    data,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isPending,
    isFetchingNextPage }
}

export default useInfiniteQueryFetch;