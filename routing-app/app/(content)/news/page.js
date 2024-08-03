"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function Page() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("http://localhost:8080/news");
        if (!response.ok) {
          throw new Error("Failed to fetch news.");
        }
        const news = await response.json();
        setNews(news);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
