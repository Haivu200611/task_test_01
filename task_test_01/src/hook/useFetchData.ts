import { useEffect, useState } from "react";

export function useFetchData(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const json = await res.json();
        const nextData = Array.isArray(json?.users)
          ? json.users
          : Array.isArray(json)
            ? json
            : [];

        if (!cancelled) {
          setData(nextData);
        }
      } catch {
        if (!cancelled) {
          setError("Failed to fetch data");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
