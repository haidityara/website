import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

const myLoader = ({ src }: ImageLoaderProps) => `${src}`;

const Image = (props: ImageProps) => (
  <NextImage {...props} quality={100} loader={myLoader} />
);

export default Image;
