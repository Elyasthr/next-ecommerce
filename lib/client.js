import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sjbgd7zg',
  dataset: 'production',
  apiVersion: '2022-04-28',
  useCdn: true,
  token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)