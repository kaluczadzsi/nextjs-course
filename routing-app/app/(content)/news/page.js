import NewsList from "@/components/news-list";

export default async function Page() {
  const response = await fetch("http://localhost:8080/news");
  const news = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
