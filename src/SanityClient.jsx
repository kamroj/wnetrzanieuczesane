import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'ewrouwj5', 
  dataset: 'production',
  useCdn: true, // Użyj CDN dla lepszej wydajności
  apiVersion: '2024-06-06'
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export default sanityClient;
