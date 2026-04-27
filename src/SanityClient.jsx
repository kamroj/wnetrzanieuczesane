import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'ewrouwj5',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'development',
  useCdn: false, 
  apiVersion: '2024-07-30'
});

const builder = createImageUrlBuilder(sanityClient);

function optimizeRawSanityUrl(url, options = {}) {
  if (!url) return undefined;

  const {
    width,
    height,
    quality = 82,
    fit = 'max',
  } = options;

  const imageUrl = new URL(url);

  imageUrl.searchParams.set('auto', 'format');
  imageUrl.searchParams.set('q', quality);
  imageUrl.searchParams.set('fit', fit);

  if (width) imageUrl.searchParams.set('w', width);
  if (height) imageUrl.searchParams.set('h', height);

  return imageUrl.toString();
}

export function urlFor(source) {
  return builder.image(source);
}

export function getOptimizedImageUrl(source, options = {}) {
  if (!source) return undefined;

  if (typeof source === 'string') {
    return source.startsWith('http') ? optimizeRawSanityUrl(source, options) : source;
  }

  if (source.url && !source._ref && !source._id) {
    return optimizeRawSanityUrl(source.url, options);
  }

  const {
    width,
    height,
    quality = 82,
    fit = 'max',
  } = options;

  let imageBuilder = urlFor(source).auto('format').quality(quality).fit(fit);

  if (width) imageBuilder = imageBuilder.width(width);
  if (height) imageBuilder = imageBuilder.height(height);

  return imageBuilder.url();
}

export default sanityClient;
