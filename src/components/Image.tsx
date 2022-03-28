import NextImage, { ImageProps } from 'next/image';

const Image = (props: ImageProps) => <NextImage {...props} quality={100} />;

export default Image;
