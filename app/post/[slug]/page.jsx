'use client'
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";

const { client } = require("@/app/lib/sanity");
import Image from "next/image";

async function getData(slug) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query, {next:{
        revalidate:1,
    }});

    return data;
}

export default async function SlugPage({ params }) {
    const data = await getData(params.slug);
    const PortableTextComponent = {
        types:{
            image:({value}) => (
                <Image src={urlFor(value).url()} alt="image" width={400} height={400}/>
            )
        }


    }


    return (
        <div>
            <header>
                <p>{data._createdAt}</p>
                <h1 className="text-4xl">{data.title}</h1>
            </header>

            <PortableText  value={data.content} components={PortableTextComponent} />

        </div>
    )
}