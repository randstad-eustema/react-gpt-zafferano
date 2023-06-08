import BaseCard from "./BaseCard";

export default function TheMain() {
  const posts = [
    {
      id: 1,
      title: "Primo post",
      content: "Finale Inter - City",
    },
    {
      id: 2,
      title: "Secondo post",
      content: "Roland Garros finale Musetti - Sinner 😎",
    },
    {
      id: 3,
      title: "Terzo post",
    },
  ];
  return (
    <main className="page-container">
      <section>
        {posts.map((post) => (
          <BaseCard key={post.id} title={post.title} content={post.content} />
        ))}
      </section>
    </main>
  );
}
