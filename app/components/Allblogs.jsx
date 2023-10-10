'use client'
import Image from 'next/image'
import { client } from '../lib/sanity';
import Link from 'next/link';


async function getPosts() {
  const query = `*[_type == "post"]`;
  const { signal } = new AbortController()

  const data = await client.fetch(query);

  return data
}

export default async function Allblogs(){
    const data = await getPosts();
    return(
        <ul>
        {data.map((post) => (
          <li key={post._id} className='mt-6'>
            <p>{new Date(post._createdAt).toISOString().split("T")[0]}</p>
            <Link href={`/post/${post.slug.current}`} prefetch>

              <h1> {post.title}</h1>
              <p className='line-clamp-2'>{post.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
}