import sanityClient from '../SanityClient';

export const fetchSlides = async () => {
  const data = await sanityClient.fetch(
    '*[_type == "home"]{slides[]{asset->{url}}}'
  );
  return data[0]?.slides.map((slide) => ({
    original: slide.asset.url,
    thumbnail: slide.asset.url,
  })) || [];
};