"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseInfiniteScroll<T> {
  initialResults: T[];
  fetchFn: (page: number) => Promise<T[]>;
}

function useInfiniteScroll<T>({
  initialResults = [],
  fetchFn,
}: UseInfiniteScroll<T>) {
  const [data, setData] = useState<T[]>(initialResults);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMoreAnime = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const newData = await fetchFn(page);

      setData((prev) => [...prev, ...newData]);
      setPage((prev) => prev + 1);
      setHasMore(newData?.length > 0 || false);
    } catch (error) {
      console.error("Error fetching more anime:", error);
    }
    setLoading(false);
  }, [page, hasMore, loading, fetchFn]);

  // Observer to trigger loading more when reaching the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMoreAnime();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchMoreAnime, hasMore]);

  return { data, loading, observerRef };
}

export default useInfiniteScroll;
