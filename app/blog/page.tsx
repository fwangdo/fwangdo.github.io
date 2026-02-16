export default function Blog() {
  const posts: { title: string; date: string; href: string }[] = [];

  return (
    <>
      <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
        Blog
      </h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.href}>
              <a href={post.href} className="font-medium hover:text-blue-600 transition-colors">
                {post.title}
              </a>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
