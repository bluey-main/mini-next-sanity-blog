import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";


const builder = ImageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}