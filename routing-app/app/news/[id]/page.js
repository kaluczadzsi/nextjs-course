export default function page({ params }) {
  const newsId = params.id;
  return (
    <div>
      <h1>New Details Page</h1>
      <p>News id: {newsId}</p>
    </div>
  );
}
