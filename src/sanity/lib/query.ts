import {groq} from 'next-sanity';


export const allProduct = groq`*[_type == "product"]`;

export const four = groq`*[_type == "product"][0...4]`;


