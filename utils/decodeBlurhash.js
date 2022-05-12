import { decode } from 'blurhash';
import { getImgFromArr } from 'array-to-image';

const decodeBlurhash = (blur) => {
  const pixels = decode(blur, 32, 32);
  const image = getImgFromArr(pixels, 32, 32);
  const { src } = image;
  return src;
};

export default decodeBlurhash;
