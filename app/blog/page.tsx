import { getAllPosts, type MarkdownBlock } from './posts';

function MarkdownContent({ block }: { block: MarkdownBlock }) {
  if (block.type === 'heading') {
    const className =
      block.level === 2
        ? 'mt-8 text-2xl font-semibold tracking-tight text-gray-950'
        : 'mt-6 text-xl font-semibold tracking-tight text-gray-950';

    return block.level === 2 ? (
      <h2 className={className}>{block.text}</h2>
    ) : (
      <h3 className={className}>{block.text}</h3>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="list-disc space-y-2 pl-5 leading-8 text-gray-700">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'code') {
    return (
      <pre className="overflow-x-auto rounded-lg border border-gray-200 bg-gray-950 p-4 text-sm leading-6 text-gray-100">
        <code>{block.code}</code>
      </pre>
    );
  }

  return <p className="leading-8 text-gray-700">{block.text}</p>;
}

export default function Blog() {
  const posts = getAllPosts();
  const csappPosts = posts.filter((post) => post.series === 'CS:APP');

  return (
    <div className="space-y-12">
      <header className="rounded-2xl border border-gray-200 bg-white/85 p-6 shadow-sm md:p-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
          Writing
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600 leading-8">
          Notes on computer systems, program analysis, and compiler work. The
          first series will follow CS:APP with implementation-oriented notes.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="text-lg font-semibold text-gray-950">CS:APP Series</h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Computer Systems: A Programmer&apos;s Perspective reading notes.
          </p>
        </div>

        {csappPosts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white/60 p-5 text-sm leading-6 text-gray-500">
            CS:APP 글을 준비 중입니다. <code>content/blog</code>에 Markdown
            파일을 추가하면 여기에 자동으로 표시됩니다.
          </div>
        ) : (
          <div className="space-y-4">
            {csappPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-gray-200 bg-white/85 p-5 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-gray-950">{post.title}</h3>
                  <time
                    dateTime={post.date}
                    className="text-sm text-gray-500 sm:ml-4 sm:shrink-0"
                  >
                    {post.date}
                  </time>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-stone-100 px-3 py-1 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-5 border-t border-gray-100 pt-6">
                  {post.blocks.map((block, index) => (
                    <MarkdownContent key={index} block={block} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
