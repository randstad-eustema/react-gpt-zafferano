import { useEffect, useState } from "react";

// dichiarazione dell'hook useFetch
export default function useFetch(service, method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const responseData = await service[method]();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setData(responseData);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [service]);

  return { data, error, isLoading };
}
