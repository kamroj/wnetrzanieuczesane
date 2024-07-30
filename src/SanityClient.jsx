import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'ewrouwj5',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false, 
  apiVersion: '2024-07-30'
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export default sanityClient;
