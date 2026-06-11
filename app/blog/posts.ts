import fs from 'node:fs';
import path from 'node:path';

export type MarkdownBlock =
  | {
      type: 'heading';
      level: 2 | 3;
      text: string;
    }
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'code';
      code: string;
      language: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  series: string;
  summary: string;
  tags: string[];
  blocks: MarkdownBlock[];
};

type FrontMatter = Omit<BlogPost, 'blocks'>;

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export function getPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

function parseFrontMatter(source: string, slug: string): {
  frontMatter: FrontMatter;
  markdown: string;
} {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing front matter in ${slug}.md`);
  }

  const fields = Object.fromEntries(
    match[1]
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':');
        return [
          line.slice(0, separator).trim(),
          line.slice(separator + 1).trim(),
        ];
      }),
  );

  return {
    frontMatter: {
      slug,
      title: fields.title,
      date: fields.date,
      series: fields.series,
      summary: fields.summary,
      tags: fields.tags ? fields.tags.split(',').map((tag) => tag.trim()) : [],
    },
    markdown: match[2].trim(),
  };
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.split('\n');
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: 'code', code: code.join('\n'), language });
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push({ type: 'heading', level: 2, text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'heading', level: 3, text: line.slice(4).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];

      while (index < lines.length && lines[index].startsWith('- ')) {
        items.push(lines[index].slice(2).trim());
        index += 1;
      }

      blocks.push({ type: 'list', items });
      continue;
    }

    const paragraph: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith('```') &&
      !lines[index].startsWith('## ') &&
      !lines[index].startsWith('### ') &&
      !lines[index].startsWith('- ')
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }

  return blocks;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return getPostSlugs()
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(blogDirectory, `${slug}.md`),
        'utf8',
      );
      const { frontMatter, markdown } = parseFrontMatter(source, slug);

      return {
        ...frontMatter,
        blocks: parseMarkdown(markdown),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}
