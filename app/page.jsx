'use client'
import Image from 'next/image'
import { client } from './lib/sanity';
import Link from 'next/link';

async function getPosts() {
  const query = `*[_type == "post"]`;
  const { signal } = new AbortController()

  const data = await client.fetch(query, {
    next: {
      revalidate: 0,
    }
  });

  return data
}

export default async function Home() {
  const data = await getPosts();
  return (
    <main>
      <h1 className='text-4xl'>All Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post._id} className='mt-6'>
            <p>{new Date(post._createdAt).toISOString().split("T")[0]}</p>
            <Link href={`/post/${post.slug.current}`} prefetch>

              <h1 className='text-2xl font-bold'> {post.title}</h1>
              <p className='line-clamp-2'>{post.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

